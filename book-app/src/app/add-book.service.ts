import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './auth/add-book/book';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: HttpClient) { }

  addBook(book: Book){
    return this.http.post('http://localhost:8080/books/add', book);
   }

   getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080/books/all')
            .pipe(map(response => response));

   }

   getBookDetail(isbn: string): Observable<Book> {

    return this.http.get<Book>('http://localhost:8080/books/' + isbn);



   }
}
