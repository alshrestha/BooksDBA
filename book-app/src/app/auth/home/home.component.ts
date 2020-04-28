import { Observable } from 'rxjs';
import { AddBookService } from './../../add-book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../add-book/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[];
  constructor(private addBookService: AddBookService) { }

  ngOnInit() {

    this.addBookService.getAllBooks().subscribe((data => 
      { 
        this.books = data;
      }
      ));
  }


}
