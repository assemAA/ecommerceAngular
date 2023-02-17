import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/startupPages/navbar/navbar.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { UserServices } from './services/user-services.service';
import { HomeComponent } from './components/startupPages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes = [
  {path : 'signup' , component : SignUpComponent} ,
  {path : 'userLogin' , component : UserLoginComponent } , 
  {path : '' , component :HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent ,
    NavbarComponent ,
    SignUpComponent ,
    UserLoginComponent,
    HomeComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule.forRoot(routes) , 
    ReactiveFormsModule ,
    HttpClientModule ,
    FormsModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
