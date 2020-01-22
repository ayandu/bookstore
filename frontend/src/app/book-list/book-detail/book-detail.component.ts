import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/model/book';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Output() hideDetailEventEmitter= new EventEmitter<Boolean>();
  @Input() book: Book;

  constructor( private sharedDataService: SharedDataService) { 
  
  }

  hideDetail(){
    this.hideDetailEventEmitter.emit(true);
  }

  addBookToCart(){
    this.sharedDataService.addBook(this.book);
  }
  
  ngOnInit() {
  }

}
