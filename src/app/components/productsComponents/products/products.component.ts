import { productService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
//import { Iprodect } from '../../../models/products';
import { Router } from '@angular/router';
import { CardService } from '../../../services/card.service';
import { BuyProcessService } from '../../../services/buy-process.service';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

   loginStatus : string |undefined |null = ""
  
  constructor(
    private dashboardService  : DashboardService,
    private productService: productService,
    private router: Router,
    public buyProcess : BuyProcessService
  ) {

    if (!localStorage.getItem('token')) {
      this.router.navigate(['/userLogin']);
    }
    else{
      if(localStorage.getItem('loginStatus')=='login as admin'){
        this.loginStatus='admin'

      }
      else{
        this.loginStatus='user'
      }
    }

    
  }


  productsList:any=[]
  ngOnInit(): void {
    this.productService.getproducts().subscribe((response: any) => {
      this.productsList=response.data
    });
  }

  
  addToCard(prodId: number) {
    
    let buyObject = {
      productId: prodId,
      quantity: 1,
    };

    this.buyProcess.addCardProduct(buyObject).subscribe((res :any) => {
      window.location.reload()
    })
    
  }

  deleteProductItem(productId:any){
   
    this.dashboardService.deleteProduct(productId).subscribe((response:any)=>{
     this.productsList=this.productsList.filter((ele:any)=>ele._id!=productId)
        
    })
  }
}
