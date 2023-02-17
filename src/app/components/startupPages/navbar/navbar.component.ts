import { Component, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges , DoCheck {
  username :string | null = ""
  needLogin :boolean = true
  cardProducts :any[] = []


  
  constructor ( private router : Router ,private cardService : CardService) {
    this.needLogin = true
    localStorage.clear()
  }


  ngDoCheck(): void {
    if (localStorage.getItem('userdata')) {

      let userData = JSON.parse(localStorage.getItem('userdata')!)
      this.username = userData.data[0].userName
      //console.log(this.username)
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
