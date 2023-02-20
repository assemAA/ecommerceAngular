
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  loginStatus : string |undefined |null = ""
  productsList:any=[]
  constructor(private dashboardService  : DashboardService ){

  }
  
  
   ngOnInit(): void {
    
      this.dashboardService.getproducts().subscribe((response: any) => {
       // this.productsList = Object.values(response);
        this.productsList=response.data
        console.log(this.productsList);
      });
   }
  
  deleteProductItem(productId:any){
   
    this.dashboardService.deleteProduct(productId).subscribe((response:any)=>{
     this.productsList=this.productsList.filter((ele:any)=>ele._id!=productId)
        
    })
  }


}

