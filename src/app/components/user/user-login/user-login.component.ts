import { Component, OnDestroy } from '@angular/core';
import { UserServices } from '../../../services/user-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnDestroy {
  constructor(private userServices : UserServices , private router : Router ) {
    if (localStorage.getItem('token')){
      this.router.navigate([''])
    }
  }

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
        if(localStorage.getItem('loginStatus')  == "login as a normal user"){
          this.userServices.getUser(userLoginData , res.token).subscribe( (data :any ) => {
            localStorage.setItem('userdata' , JSON.stringify( data))
            this.invalidLogin = false
            
            //this.router.navigate(['/products'])
            window.location.reload()
            
          }) 
        }
        else if (localStorage.getItem('loginStatus')  == "login as admin") {
            this.invalidLogin = false
            
            window.location.reload()
            //this.router.navigate([''])
        }
        
        
      } ,
      (err : any) => {alert ("in correct email or password ")
      this.invalidLogin = true;
      
    }    
      
      )
   
   
  }

  ngOnDestroy(){
  
  }
}
