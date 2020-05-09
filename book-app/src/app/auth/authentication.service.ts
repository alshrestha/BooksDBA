import { Router } from '@angular/router';
import { JwtAuthResponse } from './JwtAuthResponse';
import { LoginRequest } from './login-request';
import { RegisterRequest } from './register-request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly url = 'http://localhost:8080/';

  constructor(private httpCLient: HttpClient, private router: Router) { }

  login(loginRequest: LoginRequest): Observable<boolean>{

    return this.httpCLient.post<JwtAuthResponse>(this.url + 'login', loginRequest).pipe(map(data => {

       localStorage.setItem('authenticationToken', data.authenticationToken);
       localStorage.setItem('username', data.username);
       return true;
      }));

    }

  register(registerRequest: RegisterRequest): Observable<any>{

    return this.httpCLient.post(this.url + 'register', registerRequest);
  }

  isAuthenticated() {
    return !!localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('authenticationToken');
    localStorage.removeItem('username');
    this.router.navigateByUrl('login');


  }



}
