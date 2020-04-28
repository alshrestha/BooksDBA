package com.project.book.dto;

import java.util.List;

public class BookDtoResponse {

    private List<BookDto> bookDtoList;

    public List<BookDto> getBookDtoList() {
        return bookDtoList;
    }

    public void setBookDtoList(List<BookDto> bookDtoList) {
        this.bookDtoList = bookDtoList;
    }
}
