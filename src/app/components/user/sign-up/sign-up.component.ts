import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServices } from '../../../services/user-services.service';
import { User } from 'src/models/user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private userServices : UserServices , private activeRoute : Router){}

  userForm = new FormGroup ({
    userName : new FormControl('' ,[ Validators.required , Validators.pattern(/^[A-Za-z]+$/)]),
    userEmail : new FormControl('' , [Validators.required , Validators.pattern( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]) ,
    userpassword : new FormControl('', [Validators.required , Validators.minLength(8)])
  })

  
  login(event : HTMLFormElement) {
    event['preventDefault()'] 

    if (this.validateForm()) {
     let userId =  0
     let userName = this.getUserNameStatus.value 
     let userEmail = this.getEmailStatus.value
     let userPassword = this.getPasswordStatus.value  

     let userData : User = new User (userId , userName , userEmail , userPassword) ;
     //console.log(this.userData)
     this.userServices.addNewUser(userData).subscribe((res:any) => {})
     this.activeRoute.navigateByUrl('')
    }

  }

  validateForm () {

    if (this.getUserNameStatus.errors == null && this.getEmailStatus.errors == null && this.getPasswordStatus.errors == null) 
      return true
    else 
      return false
    
  }


  
  ngOnInit () {
    
  }

  get getUserNameStatus () {
    return this.userForm.controls['userName'];
  }

  get getEmailStatus () {
    return this.userForm.controls['userEmail'];
  }

  get getPasswordStatus () {
    return this.userForm.controls['userpassword'];
  }

}
