import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllCarts(): Observable<any>{
    return this.http.get(`http://localhost:8080/carts`);
  }

  getById(id: string){
    return this.http.get<Cart>(`http://localhost:8080/cart` + `/` + id);
  }

  saveCart(ids: string[]){
    return this.http.post(`http://localhost:8080/create-cart`, ids);
  }

  removeBookfromCart(id: string, bookId: string){
    return this.http.post(`http://localhost:8080/cart/` + id + `/remove-book/` + bookId, null);
  }

  addBooktoCart(id: string, bookId: string){
    return this.http.post(`http://localhost:8080/cart/` + id + `/book/` + bookId, null);
  }

  deleteBook(cart: Cart){
    return this.http.delete<Cart>(`/` + cart.id);
  }

}
