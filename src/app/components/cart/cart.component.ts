import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/_models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() removeItemEvent = new EventEmitter<number>();
  @Input() cartItems: Array<Item>;

  constructor() { }

  ngOnInit() {
  }

  removeItem(i: number) {
    this.removeItemEvent.emit(i);
  }

}
