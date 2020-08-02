import { Component, OnInit, Input, OnChanges, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { ReceiptItem } from 'src/app/_models/receipt-item';
import htmlToImage from 'html-to-image';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit, OnChanges {
  @ViewChild('receipt', { static: false }) receipt: ElementRef;
  @Input() receiptItem: ReceiptItem;
  booksArray: Array<Item> = [];
  foodArray: Array<Item> = [];
  medicalArray: Array<Item> = [];
  otherArray: Array<Item> = [];
  totalTax: any;
  totalCost: any;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

  // changes: SimpleChanges
  ngOnChanges() {
    this.receiptItemsChange();
  }

  calculateTaxes() {
    this.totalTax = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.receiptItem.items.length; i++) {
      const itemPrice = this.receiptItem.items[i].price;
      let itemTaxNoRound = 0;
      const fivePercent = itemPrice * .05;
      const tenPercent = itemPrice * .1;
      if (this.receiptItem.items[i].category.toString() === 'Other') {
        this.totalTax += tenPercent;
        itemTaxNoRound += tenPercent;
      }
      if (this.receiptItem.items[i].import === true) {
        this.totalTax += fivePercent;
        itemTaxNoRound += fivePercent;
      }
      this.receiptItem.items[i].pricePlusTax = itemPrice + itemTaxNoRound;
    }
    this.totalTax = this.roundTo5(this.totalTax);
  }

  calculateTotal() {
    this.totalCost = 0;
    for (const item of this.receiptItem.items) {
      this.totalCost += item.pricePlusTax;
    }
  }

  receiptItemsChange() {
    // this.receiptItem.items.sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0));
    this.resetArrays();
    this.receiptItem.items.forEach((e, i, array) => {
      switch (e.category.toString()) {
        case 'Books':
          this.booksArray.push(e);
          break;
        case 'Food':
          this.foodArray.push(e);
          break;
        case 'Medical':
          this.medicalArray.push(e);
          break;
        case 'Other':
          this.otherArray.push(e);
          break;
        default:
          console.log('Error: No category given');
          break;
      }
    });
    this.calculateTaxes();
    this.calculateTotal();
  }

  resetArrays() {
    this.booksArray = [];
    this.foodArray = [];
    this.medicalArray = [];
    this.otherArray = [];
  }

  roundTo5(total: number) {
    return (Math.ceil(total * 20) / 20);
  }

  downloadReceipt() {
    const doc = this.receipt.nativeElement;
    doc.style.backgroundColor = '#424242';
    htmlToImage.toPng(doc)
      .then((dataUrl) => {
        this.download(dataUrl, 'receipt.png');
      });
  }

  download(dataurl, filename) {
    const a = this.renderer2.createElement('a');
    a.href = dataurl;
    a.setAttribute('download', filename);
    a.click();
  }

}
