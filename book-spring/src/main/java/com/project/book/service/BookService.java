package com.project.book.service;

import com.project.book.domain.Book;
import com.project.book.dto.BookDto;
import com.project.book.exception.BookExceptionNotFound;
import com.project.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<BookDto> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        return books.stream().map(this::mapFromBookDto).collect(toList());
    }

    public void addBook(BookDto bookDto) {
        Book book = mapToBookDto(bookDto);
        bookRepository.insert(book);
    }

    private BookDto mapFromBookDto(Book book) {
        BookDto bookDto = new BookDto();
        bookDto.setTitle(book.getTitle());
        bookDto.setIsbn(book.getIsbn());
        bookDto.setAuthors(book.getAuthors());
        bookDto.setCategories(book.getCategories());
        bookDto.setShortDescription(book.getShortDescription());
        bookDto.setLongDescription(book.getLongDescription());
        bookDto.setThumbnailUrl(book.getThumbnailUrl());
        return bookDto;
    }

    private Book mapToBookDto(BookDto bookDto) {

        Book book = new Book();
        book.setIsbn(bookDto.getIsbn());
        book.setTitle(bookDto.getTitle());
        book.setAuthors(bookDto.getAuthors());
        book.setCategories(bookDto.getCategories());
        book.setShortDescription(bookDto.getShortDescription());
        book.setLongDescription(bookDto.getLongDescription());
        book.setThumbnailUrl(bookDto.getThumbnailUrl());

        return book;
    }

    public BookDto getBookByISBN(String isbn) {
        Book book = bookRepository.findBooksByIsbn(isbn).orElseThrow(() -> new BookExceptionNotFound("for ISBN: " + isbn));
        return mapFromBookDto(book);

    }
}

  /*  public List<Book> getAllBooks(){
        List<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(books::add);
        return books;
    }

    public Optional<Book> findByIsbn(String isbn){
        return bookRepository.findBooksByIsbn(isbn);
    }

    public Book addBook(Book book){
        return bookRepository.insert(book);
    }

    public Book updateBook(Book book){
        return bookRepository.save(book);
    }

*/


