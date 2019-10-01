import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Book[] = [];
  id:number = 1;

  constructor() { }

  create(b: Book) {
    b.id = this.id;
    ++this.id;
    this.books.push(b);
  }


}
