package com.project.book.controller;

import com.project.book.dto.AuthenticationRequest;
import com.project.book.dto.AuthenticationResponse;
import com.project.book.dto.RegisterRequest;
import com.project.book.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity signUp(@RequestBody RegisterRequest registerRequest) {
        userService.signUp(registerRequest);
        return new ResponseEntity(HttpStatus.OK);

    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest authRequest) {
        return userService.login(authRequest);
    }

}
