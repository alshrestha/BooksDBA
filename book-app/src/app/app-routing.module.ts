import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { AddBookComponent } from './auth/add-book/add-book.component';
import { BookDetailComponent } from './auth/book-detail/book-detail.component';


const routes: Routes = [{ path:'register', component: RegisterComponent},
{ path:'register-success', component: RegisterSuccessComponent, canActivate: [AuthGuard]},
{ path:'login', component: LoginComponent},
{ path:'home', component: HomeComponent, canActivate: [AuthGuard]},
{ path: 'add', component: AddBookComponent, canActivate: [AuthGuard]},
{ path: 'details/:isbn', component: BookDetailComponent, canActivate: [AuthGuard]},
{ path:'', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
