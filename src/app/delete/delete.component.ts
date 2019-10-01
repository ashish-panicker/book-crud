import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  book:Book;

  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.book = this.svc.books[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
  }

  deleteBook(){
    this.svc.books.splice(this.svc.books.indexOf(this.book), 1);
  }

}
