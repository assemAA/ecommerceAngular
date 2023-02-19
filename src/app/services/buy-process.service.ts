import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyProcessService {

  userToken : any
  reqHeader :any
  card_url = "http://localhost:8080/buyingBag"


  constructor(private cardHttp : HttpClient) { 
    
    let token = localStorage.getItem('token')
    this.userToken = 'bearer '+ token 
     this.reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'authorization': this.userToken 
   });
  }



  addCardProduct(prod : any) {
    console.log("add card 2")
    return this.cardHttp.post(this.card_url , {productId : prod.productId , quantity : 1} , {headers : this.reqHeader})
  }

  
}
