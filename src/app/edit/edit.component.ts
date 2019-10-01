import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: Book;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.svc.books[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }

  editBook() {
    this.svc.books[this.svc.books.indexOf(this.book)] = this.book;
    console.log(this.route.snapshot.firstChild);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.paramMap.keys);
  }

}
