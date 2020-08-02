import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/_models/item';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-item-options',
  templateUrl: './item-options.component.html',
  styleUrls: ['./item-options.component.scss']
})
export class ItemOptionsComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter<Item>();
  addItemForm: FormGroup;
  item: Item;
  get categoryType() { return Category; }
  categoriesArray: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createItemForm();
    this.categoriesArray = this.enumToArray();
  }

  createItemForm() {
    this.addItemForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(75)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(256)]],
      price: [0, [Validators.required, Validators.min(0.01), Validators.max(1000000)]],
      category: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
      import: [false, [Validators.required]]
    });
  }
  get title() {
    return this.addItemForm.get('title');
  }
  get description() {
    return this.addItemForm.get('description');
  }
  get price() {
    return this.addItemForm.get('price');
  }
  get category() {
    return this.addItemForm.get('category');
  }
  get import() {
    return this.addItemForm.get('import');
  }

  resetForm() {
    this.addItemForm.reset();
    this.addItemForm.patchValue({
      category: null,
      import: false
    });
  }

  addItemToCart() {
    this.item = Object.assign({}, this.addItemForm.value);
    this.addItemEvent.emit(this.item);
    this.resetForm();
  }

  enumToArray() {
    return Object.keys(this.categoryType).filter(e => !isNaN(+e)).map(o => (this.categoryType[o]));
  }

}
