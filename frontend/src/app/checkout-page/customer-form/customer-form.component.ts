import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private sharedDataService: SharedDataService,
    private router: Router,
    private customerService: CustomerService,
    private orderService: OrderService,
    private cartService: CartService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          phone:['',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          address: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      let customer = new Customer(null,
        this.registerForm.get('email').value,
        this.registerForm.get('name').value,
        this.registerForm.get('address').value,
        this.registerForm.get('phone').value);

      this.customerService.createCustomer(customer).subscribe(data => { customer = data; this.sharedDataService.addCustomer(data);});
      
      let cartId: string = '';

      this.cartService.saveCart(this.sharedDataService.getIds()).subscribe(data => { cartId = data.id; this.sharedDataService.addCart(data);})
      
      let order = new Order(null, customer.id, null, cartId);
      
      this.orderService.createOrder(order).subscribe(data => {order = data; this.sharedDataService.addOrder(data);});
      
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      
      this.sharedDataService.clearBooks();

      this.router.navigate(['thanks'])
  }
}
