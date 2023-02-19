import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class productService {


  product_url = "http://localhost:8080/products"


  constructor(private productHttp : HttpClient) { 
    
  
  }

  getproducts () {
    return this.productHttp.get(this.product_url )
  }

}