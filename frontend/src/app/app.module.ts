import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { AdminComponent } from './admin/admin.component';
import { BooksComponent } from './admin/books/books.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { BookService } from './services/book.service';
import { OrderService } from './services/order.service';
import { CartService } from './services/cart.service';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './admin/books/table/table.component';
import { SearchFormComponent } from './admin/books/search-form/search-form.component';
import { PagenateComponent } from './admin/books/pagenate/pagenate.component';
import { EditComponent } from './admin/book/edit/edit.component';
import { DetailInfoComponent } from './book-list/detail-info/detail-info.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CartUpdateComponent } from './shopping-cart/cart/cart-update/cart-update.component';
import { CartImageComponent } from './shopping-cart/cart/cart-image/cart-image.component';
import { CartInfoComponent } from './shopping-cart/cart/cart-info/cart-info.component';
import { CartSummaryComponent } from './shopping-cart/cart-summary/cart-summary.component';
import { CustomerFormComponent } from './checkout-page/customer-form/customer-form.component';
import { OrderTotalComponent } from './checkout-page/order-total/order-total.component';
import { OrderBookInfoComponent } from './checkout-page/order-book-info/order-book-info.component';
import { OrderSummaryHeadingComponent } from './checkout-page/order-summary-heading/order-summary-heading.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    BookFormComponent,
    OrderInfoComponent,
    CheckoutPageComponent,
    AdminComponent,
    BooksComponent,
    OrdersComponent,
    TableComponent,
    SearchFormComponent,
    PagenateComponent,
    EditComponent,
    DetailInfoComponent,
    ShoppingCartComponent,
    CartComponent,
    CartUpdateComponent,
    CartImageComponent,
    CartInfoComponent,
    CartSummaryComponent,
    CustomerFormComponent,
    OrderTotalComponent,
    OrderBookInfoComponent,
    OrderSummaryHeadingComponent,
    ThankYouPageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, HttpClientModule
  ],
  providers: [BookService, OrderService, CartService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
