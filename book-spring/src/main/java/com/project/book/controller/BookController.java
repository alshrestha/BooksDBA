package com.project.book.controller;

import com.project.book.dto.BookDto;
import com.project.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/books")
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<BookDto>> getAllBooks() {
        return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
    }

    @GetMapping("/{isbn}")
    public ResponseEntity<BookDto> getBookByIsbn(@PathVariable @RequestBody String isbn) {
        return new ResponseEntity<>(bookService.getBookByISBN(isbn), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity addBook(@RequestBody BookDto book) {
        bookService.addBook(book);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
