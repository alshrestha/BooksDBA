import { AddBookService } from './../../add-book.service';
import { Router } from '@angular/router';
import { Book } from './book';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  book: Book;
  authors: FormArray;

  constructor(private addBookService: AddBookService, private router: Router, private formBuilder: FormBuilder) {
    
      }

  ngOnInit(): void {
    this.addBookForm = this.formBuilder.group({
      title: '',
      isbn: '',
      thumbnailUrl: '',
      shortDescription: '',
      longDescription: '',
      authors: this.formBuilder.array([]),
      categories: this.formBuilder.array([]),
    });
  }

  addBook() {
    this.book.title = this.addBookForm.get('title').value;
    this.book.isbn = this.addBookForm.get('isbn').value;
    this.book.thumbnailUrl = this.addBookForm.get('thumbnailUrl').value;
    this.book.shortDescription = this.addBookForm.get('shortDescription').value;
    this.book.longDescription = this.addBookForm.get('longDescription').value;
    this.book.authors = this.addBookForm.get('authors').value;
    this.book.categories = this.addBookForm.get('categories').value;

    //this.book = this.addBookForm.getRawValue();

    this.addBookService.addBook(this.book).subscribe(
      (data) => {
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log('Failed');
      }
    );
  }

  // get authorForms(){
  //   return this.addBookForm.get('authors') as FormArray;
  // }

  addAuthor(){
    let author = this.formBuilder.group({
      book: ''

    });


    this.authors = this.addBookForm.get('authors') as FormArray;
    this.authors.push(author);
    console.log("Error");
  }

  deleteAuthor(index: number){
    //this.authorForms.removeAt(index);
  }

  get categoryForms(){
    return this.addBookForm.get('categories') as FormArray;
  }

  addCategory(){
    let category = this.formBuilder.group({
      categories: []
    });

    this.categoryForms.push(category);
  }

  deleteCategory(index: number){
    this.categoryForms.removeAt(index);
  }


}
