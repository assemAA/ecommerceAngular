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
import { FooterComponent } from './components/startupPages/footer/footer.component';
import { CardComponent } from './components/startupPages/card/card.component';
import { SliderComponent } from './components/startupPages/slider/slider.component';
import { AboutComponent } from './components/startupPages/about/about.component';
import { ProductsComponent } from './components/productsComponents/products/products.component';
import { CardService } from '../../ecommerceAngular/src/app/services/card.service';
import { productService } from './services/products.services';
import { BuyProcessService } from './services/buy-process.service';

const routes : Routes = [
  {path : 'signup' , component : SignUpComponent} ,
  {path : 'userLogin' , component : UserLoginComponent } , 
  {path : '' , component :HomeComponent} , 
  {path : 'about' , component : AboutComponent} , 
  {path : 'products' , component : ProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent ,
    NavbarComponent ,
    SignUpComponent ,
    UserLoginComponent,
    HomeComponent ,
    SliderComponent ,
    FooterComponent,
    CardComponent,
    AboutComponent , 
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RouterModule.forRoot(routes) , 
    ReactiveFormsModule ,
    HttpClientModule ,
    FormsModule
  ],
  providers: [UserServices , CardService , productService , BuyProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
