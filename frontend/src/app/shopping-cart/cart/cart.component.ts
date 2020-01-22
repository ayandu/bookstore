import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  @Input() book: Book;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSamePage(event: { preventDefault: () => void; }) {
    event.preventDefault();

    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/shopping-cart']));
  }

}
