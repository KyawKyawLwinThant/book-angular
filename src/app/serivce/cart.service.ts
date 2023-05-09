import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject:BehaviorSubject<Book[]> =
    new BehaviorSubject<Book[]>([]);
  cart$:Observable<Book[]> = this.cartSubject.asObservable();
  books:Book[]=[];
  book!:Book;

  constructor() { }

  public addToCart(book:Book){
     this.isExisted(book)
       .subscribe(data => this.book=data);
     if(!this.book){
       this.books.push(book);
       this.cartSubject.next(this.books);
     }

  }
  isExisted(book:Book):Observable<Book>{
    return of(this.books)
      .pipe(
       map(books =>
         books.find(b => b.id === book.id) as Book)
      ) ;
  }
}
