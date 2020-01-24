import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.css']
})
export class OrderTotalComponent implements OnInit {
  total: number= 0;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.updateTotal();
  }

  updateTotal(){
    for(let book of this.sharedDataService.getBooks()){
      this.total += book.price;
    }
  }

}
