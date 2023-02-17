import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from '../../models/user';
// import { Http, Headers, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserServices{

  baseUrl : string = "http://localhost:8080/users"

  constructor( private userHttp : HttpClient ) { }

  addNewUser (user : User) {
   return  this.userHttp.post(this.baseUrl , user)
  }

  getUser  (user : any , token : string)  {
    
    let  authroizationToken = 'bearer '.concat(token);   



    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': authroizationToken 
   });

    return this.userHttp.get(this.baseUrl , {headers : reqHeader})
  }

  loginUser (user : any) {
    return this.userHttp.post('http://localhost:8080/login' , user)
  }

}
