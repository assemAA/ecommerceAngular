import { Component, OnChanges, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges , DoCheck , OnInit {
  username :string | null = ""
  needLogin :boolean = true
  cardProducts :any[] = []
  totalPrice : number = 0 
  loginStatus : string | undefined | null = ""


  
  constructor ( private router : Router ,private cardService : CardService) {
    this.needLogin = true
    this.totalPrice = 0
    this.cardProducts = []
    //localStorage.clear()

    if (localStorage.getItem('token'))
      this.identifyLogin()


      if (this.loginStatus == "user"){
        this.cardService.getCardProducts().subscribe( (res :any ) => {
        this.cardProducts = res.data 
       // console.log(this.cardProducts)
      })
    }
    
  }

  identifyLogin () {
    if (localStorage.getItem('loginStatus') == "login as a normal user") 
      this.loginStatus = "user"
    else if (localStorage.getItem('loginStatus')== "login as admin")
      this.loginStatus = "admin"
  }

  ngOnInit() {
    
    console.log(this.loginStatus)
  }

  ngDoCheck(): void {
    if (localStorage.getItem('userdata')) {

      let userData = JSON.parse(localStorage.getItem('userdata')!)
      this.username = userData.data[0].userName
      //console.log(this.username)
      this.needLogin = false

      this.totalPrice = 0 
      this.cardProducts.map((ele:any) => {
        this.totalPrice += ele.productId.price * ele.quantity
      })
    }
    else if (localStorage.getItem('loginStatus') == "login as admin") {
      this.needLogin = false
    }
  }

  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("on change ")
  }


  userSignOut() {
    localStorage.clear()
    this.needLogin = true 
    this.router.navigate([''])

  }

  getCardProducts(){
    this.cardService.getCardProducts().subscribe( (res :any ) => {
      this.cardProducts = res.data 
     // console.log(this.cardProducts)
    })
  }

  increamentQuantity(processId : any , quan : any){
    let buyingObject = {
      _id : processId , 
      quantity : quan + 1 
    }

    this.cardService.updateCardProducts(buyingObject).subscribe((res :any) => {
      let objIndex = this.cardProducts.findIndex((ele:any) =>ele._id == processId)
      this.cardProducts[objIndex].quantity = buyingObject.quantity
    });
    
  }

  decreamentQuantity(processId : any , quan : any){
    if (quan > 1) {
      let buyingObject = {
        _id : processId , 
        quantity : quan - 1 
      }
  
      this.cardService.updateCardProducts(buyingObject).subscribe((res :any) => {
        let objIndex = this.cardProducts.findIndex((ele:any) =>ele._id == processId)
        this.cardProducts[objIndex].quantity = buyingObject.quantity
      });
    }
    
  }

  removeProcess(processId : any) {
    this.cardService.deleteCardProduct(processId).subscribe( (res :any) => {
      this.cardProducts = this.cardProducts.filter((ele : any)=> {return ele._id != processId })
    })
  }
}
