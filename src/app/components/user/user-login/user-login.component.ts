import { Component } from '@angular/core';
import { UserServices } from '../../../services/user-services.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private userServices : UserServices ) {}

  invalidLogin : boolean = false

  userEmail :string = "" 
  userPassword : string = ""


  loginUser() {
    let userLoginData = {
      email : this.userEmail ,
      password : this.userPassword 
    }
    
      this.userServices.loginUser(userLoginData).subscribe( (res : any) => {
        localStorage.setItem('loginStatus' , res.data)
        localStorage.setItem('token' , res.token)
        this.userServices.getUser(userLoginData , res.token).subscribe( (data :any ) => {
          localStorage.setItem('userdata' , JSON.stringify( data))
          this.invalidLogin = false
        }) 
        
      } ,
      (err : any) => {alert ("in correct email or password ")
      this.invalidLogin = true;
      
    }    
      
      )
   
   
  }
}
