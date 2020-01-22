import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/model/book';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-update',
  templateUrl: './cart-update.component.html',
  styleUrls: ['./cart-update.component.css']
})
export class CartUpdateComponent implements OnInit {
  @Input() book: Book;
  total = 0;
  quantity = 0;
  constructor(private sharedDataService: SharedDataService,
    private router: Router) { }

  ngOnInit() {
    this.sharedDataService.setTotal();
    this.quantity = this.sharedDataService.getCountFor(this.book.id);
    this.total = this.quantity * this.book.price;
  }

  onRemove(b : Book){
    for(let i = 0; i < this.sharedDataService.getBooks().length; i++){
      if(this.sharedDataService.getBooks()[i].id === b.id){
        this.sharedDataService.removeBook(i); break;
      }
    }
    
    this.quantity = this.sharedDataService.getCountFor(this.book.id);
    this.total = this.quantity * this.book.price;
    //if(this.sharedDataService.getBooks().length === 0) this.router.navigate(['books']);
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => this.router.navigate(['/shopping-cart']));
  }

  onAdd(b : Book){
    this.sharedDataService.addBook(b);
    this.quantity = this.sharedDataService.getCountFor(this.book.id);
    this.total = this.quantity * this.book.price;
    //if(this.sharedDataService.getBooks().length === 0) this.router.navigate(['books']);
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => this.router.navigate(['/shopping-cart']));
  }

  onDelete(b: Book){
    for(let i = 0; i < this.sharedDataService.getBooks().length; i++){
      if(this.sharedDataService.getBooks()[i].id === b.id){
        this.sharedDataService.removeBook(i); continue;
      }
    }
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => this.router.navigate(['/shopping-cart']));
  }
}
