package com.project.book.dto;

public class AuthenticationResponse {

    private String authenticationToken;
    private String username;

    public AuthenticationResponse(String authenticationToken, String username) {
        this.authenticationToken = authenticationToken;
        this.username = username;
    }

    public AuthenticationResponse() {
    }

    public String getAuthenticationToken() {
        return authenticationToken;
    }

    public String getUsername() {
        return username;
    }
}
