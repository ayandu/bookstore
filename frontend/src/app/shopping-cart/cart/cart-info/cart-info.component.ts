import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {
  @Input() book: Book;
  inStock: string;
  constructor() { }

  ngOnInit() {
    this.setInStock();
  }

  setInStock(){
    this.inStock = ( this.book.quantity > 0) ? this.book.quantity +" book(s) are in stock." : "The book is out of stock!";
  }
}
