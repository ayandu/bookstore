import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { from } from 'rxjs'
import { tap, distinct} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  books = new Array<Book>();
  total = 0;

  addBook(book: Book){
    this.books.push(book);
  }
  
  removeBook(i: number): void {
    this.books.splice(i, 1);
  }
  
  getBooks(){
    return this.books;
  }
  
  setTotal() {
    this.total = 0; 
    for( let b of this.books)  {
      this.total += b.price;
    }
  }

  getTotal(){
    return this.total;
  }

  getQuantity(){
    return this.books.length;
  }

  getCountFor(id: string){
    let count = 0;
    for(let b of this.books) if( b.id === id) count++;
    return count;
  }

  getTotalFor(id: string){
    let sum = 0;
    for(let b of this.books) if( b.id === id) sum++;
    return sum;
  }

  clearBooks() {
    this.books.forEach( b => this.books.pop());
  }
  
  removeDuplicates(): Book[] {;
    let unique : Book[] = []
    from(this.books)
    .pipe(
      //tap(item => console.log('Event from:', item)),
      distinct(d => d.id)
    )
    .subscribe(r => unique.push(r));
    return unique;
  }
  
  delete(book: Book) {
      for(let i = 0 ; i < this.books.length; i++){
        if( this.books[i].id === book.id) {this.books.pop(); i--;}
      }
  }
  
  constructor() {}
}
