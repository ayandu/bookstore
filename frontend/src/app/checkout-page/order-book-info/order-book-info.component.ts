import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-order-book-info',
  templateUrl: './order-book-info.component.html',
  styleUrls: ['./order-book-info.component.css']
})
export class OrderBookInfoComponent implements OnInit {
  @Input() book: Book;
  quantity: number = 0;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.quantity = this.sharedDataService.getCountFor(this.book.id);
  }
}
