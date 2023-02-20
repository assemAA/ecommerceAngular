
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

 
  product_url = "http://localhost:8080/products"
 
  adminToken : any
  reqHeader :any

  constructor(private productHttp : HttpClient) { 
    let token = localStorage.getItem('token')
    this.adminToken = 'bearer '+ token 
     this.reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'authorization': this.adminToken 
   });
  
  }

  getproducts () {
    return this.productHttp.get(this.product_url )
  }
  getProductByID(productId :any){
    return this.productHttp.get(`${this.product_url}/${productId }`)
  }
  addProduct(product :any ){
    
  
    return this.productHttp.post(this.product_url,product ,{headers : this.reqHeader})
  }

  deleteProduct(productId :any){
    let  options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization' : this.adminToken , 
      })
    };
    return this.productHttp.delete(`${this.product_url}/${productId }`,options)
  }
  editProduct(product :any ,productId :any){
  
    return this.productHttp.patch(this.product_url,product,{headers : this.reqHeader})
  }
  


}
