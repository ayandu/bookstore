import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  
  books: Book[];
  unique: Book[];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.books = this.sharedDataService.getBooks();
    this.unique = this.sharedDataService.removeDuplicates();
  }

}
