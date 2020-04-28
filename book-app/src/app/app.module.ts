import { AuthGuard } from './auth.guard';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './auth/home/home.component';
import { AddBookComponent } from './auth/add-book/add-book.component';
import { HttpClientInterceptor } from './auth/httpClient-interceptor';
import { BookDetailComponent } from './auth/book-detail/book-detail.component';

const routes:Routes = [
        { path:'register', component: RegisterComponent},
        { path:'register-success', component: RegisterSuccessComponent, canActivate: [AuthGuard]},
        { path:'login', component: LoginComponent},
        { path:'home', component: HomeComponent, canActivate: [AuthGuard]},
        { path: 'add', component: AddBookComponent, canActivate: [AuthGuard]},
        { path: 'details/:isbn', component: BookDetailComponent, canActivate: [AuthGuard]},
        { path:'', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    HomeComponent,
    AddBookComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
