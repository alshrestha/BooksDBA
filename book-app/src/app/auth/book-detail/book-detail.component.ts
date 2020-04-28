import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddBookService } from 'src/app/add-book.service';
import { Book } from '../add-book/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  isbn: string;
  data: any;
  book: Book;
  constructor(private activatedRoute: ActivatedRoute, private addBookService: AddBookService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.isbn = params['isbn'];
      
    });
    
    this.addBookService.getBookDetail(this.isbn).subscribe((
      data: Book) => {
        this.book = data;
         }
    );
    
    }
  }
