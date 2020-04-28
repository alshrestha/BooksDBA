import { AddBookService } from './../../add-book.service';
import { Router } from '@angular/router';
import { Book } from './book';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  book: Book;

  title = new FormControl('');
  isbn = new FormControl('');
  thumbnailUrl = new FormControl('');
  shortDescription = new FormControl('');
  longDescription = new FormControl('');
  authors = new FormControl([]);
  categories = new FormControl([]);

  constructor(private addBookService: AddBookService, private router: Router) {
    this.addBookForm = new FormGroup({
      title: this.title,
      isbn: this.isbn,
      thumbnailUrl: this.thumbnailUrl,
      shortDescription: this.shortDescription,
      longDescription: this.longDescription,
      authors: this.authors,
      categories: this.categories,
    });
    this.book = {
      title: '',
      isbn: '',
      thumbnailUrl: '',
      shortDescription: '',
      longDescription: '',
      authors: [],
      categories: [],
    };
  }

  ngOnInit(): void {}

  addBook() {
    this.book.title = this.addBookForm.get('title').value;
    this.book.isbn = this.addBookForm.get('isbn').value;
    this.book.thumbnailUrl = this.addBookForm.get('thumbnailUrl').value;
    this.book.shortDescription = this.addBookForm.get('shortDescription').value;
    this.book.longDescription = this.addBookForm.get('longDescription').value;
    this.book.authors = this.addBookForm.get('authors').value;
    this.book.categories = this.addBookForm.get('categories').value;

    this.addBookService.addBook(this.book).subscribe(
      (data) => {
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log('Failed');
      }
    );
  }

}
