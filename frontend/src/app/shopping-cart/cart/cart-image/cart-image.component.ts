import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-cart-image',
  templateUrl: './cart-image.component.html',
  styleUrls: ['./cart-image.component.css']
})
export class CartImageComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
