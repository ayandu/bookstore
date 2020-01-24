import { Component, OnInit, Input} from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/model/book';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input() books: Book[] = [];
  total = 0;
  items = 0;
  
  constructor(private sharedDataService: SharedDataService,
        private router: Router) { }

  ngOnInit() {
    this.setProperties();
  }

  checkout(){
    let ids: string[] = [];
    this.sharedDataService.getBooks().forEach( book => ids.push(book.id));
    if( ids.length !== 0){
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(ids, null, 4));
      this.router.navigate([`checkout`]);
    }
    else alert('FAIL!! :-(\n\n' + JSON.stringify(ids, null, 4));
  }

  setProperties(){
    for(let b of this.books) this.total += b.price;
    this.items = this.books.length;
  }

}
