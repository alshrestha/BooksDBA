import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { LoginRequest } from './../login-request';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequest: LoginRequest;

  constructor(private authService: AuthenticationService, private router:Router) { 
    this.loginForm = new FormGroup(
      {
        userName: new FormControl(),
        password: new FormControl()
      }
    );

    this.loginRequest = {

      userName: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
   this.loginRequest.userName = this.loginForm.get('userName').value;
    this.loginRequest.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequest).subscribe(data => {
      if(data){
        console.log("Successfull Authentication");
        this.router.navigateByUrl('/home');
      }
                 
      else {
        console.log("Failed");

      }
    });
    
  }

}
