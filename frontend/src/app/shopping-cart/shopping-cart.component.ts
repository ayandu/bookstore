import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  books = new Array<Book>();
  isEmpty: boolean;
  unique = new Array<Book>();
  constructor(private sharedDataService: SharedDataService) { 

  }

  ngOnInit() {
    this.books = this.sharedDataService.getBooks();
    this.isEmpty = (this.books.length === 0) ? true : false;
    this.unique = this.sharedDataService.removeDuplicates();
    //console.log(this.unique);
  }

}
