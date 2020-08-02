import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { ReceiptItem } from 'src/app/_models/receipt-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<Item> = [];
  receiptItem: ReceiptItem = {length: 0, items: []};

  constructor() { }

  ngOnInit() {
  }

  addItem(item: Item) {
    // Cart items
    this.items.push(item);
    // Receipt items
    this.receiptItem = {
      length: this.items.length,
      items: this.items
    };
  }

  removeItem(i: number) {
    // Cart items
    this.items.splice(i, 1);
    console.log(this.items);
    // Receipt items
    this.receiptItem = {
      length: this.items.length,
      items: this.items
    };
  }

}
