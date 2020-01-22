import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  books = new Array<Book>();
  constructor(private service: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){ this.service.getAllBooks()
    .subscribe( booklist => this.books = booklist);
  }


}
