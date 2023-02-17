import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {

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

  getCardProducts () {
    return this.cardHttp.get(this.card_url , {headers : this.reqHeader})
  }

  updateCardProducts(buyingProcess :any) {
    return this.cardHttp.patch(this.card_url , buyingProcess ,  {headers : this.reqHeader})
  }

  deleteCardProduct (processID :any){
    
    let  options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization' : this.userToken , 
      }),
      body: {
        _id: processID
      },
    };


    return this.cardHttp.delete(this.card_url , options)
  }
}
