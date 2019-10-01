import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Book[] = [];

  constructor() { }

  create(b: Book) {
    this.books.push(b);
  }


}
