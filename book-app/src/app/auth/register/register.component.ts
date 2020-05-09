import { AuthenticationService } from './../authentication.service';
import { RegisterRequest } from './../register-request';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerRequest: RegisterRequest;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, 
                     private router:Router) {
    this.registerForm = this.formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    // this.registerRequest = {
    //   firstName: '',
    //   lastName: '',
    //   userName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: ''
    // };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.registerRequest.firstName = this.registerForm.get('firstName').value;
    // this.registerRequest.lastName = this.registerForm.get('lastName').value;
    // this.registerRequest.userName = this.registerForm.get('userName').value;
    // this.registerRequest.email = this.registerForm.get('email').value;
    // this.registerRequest.password = this.registerForm.get('password').value;
    // this.registerRequest.confirmPassword = this.registerForm.get('confirmPassword').value;

    if(this.registerForm.valid){
    this.registerRequest = this.registerForm.getRawValue();

    this.authService.register(this.registerRequest).subscribe(data => {
      console.log('Registration Successful');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('Registration Unsuccessful');
    });
  }
}
}
