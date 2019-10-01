import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id: number = 0;
  author: string;
  title: string;
  price: number;

  newBook: Book;

  //dependancy injection code
  constructor(private svc:DataService) { }

  ngOnInit() {
  }

  createBook() {
    ++this.id;
    this.newBook = new Book(this.id, this.author, this.title, this.price);
    console.log(this.newBook);
    this.svc.create(this.newBook);

  }

}
