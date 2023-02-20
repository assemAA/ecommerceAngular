import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../services/dashboard.service';
@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.css']
})
export class FormDashboardComponent {
 productId:any
  product :any ={
    productName : "",
    description : "",
    price : 0,
    productImage : ""
  }
  constructor(private dashboardService  : DashboardService, private router: Router ,public activatedRoute:ActivatedRoute ){
    this.productId=this.activatedRoute.snapshot.params['id']
  }
      productform = new FormGroup({
        productName: new FormControl('', [Validators.required, Validators.maxLength(40)]),
        description: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        productImage: new FormControl('', [Validators.required])
       
      });
      get getName() {
        return this.productform.controls['productName']
      }
    
      get getDescribtion() {
        return this.productform.controls['description']
      }
      get getPrice() {
        return this.productform.controls['price']
      }
      get getProductImage() {
        return this.productform.controls['productImage']
      }
    
    
      Add(e: any) {
        e.preventDefault();
        this.product._id=this.productId
        this.product.productName=this.productform.value.productName
        this.product.description=this.productform.value.description
        this.product.price=this.productform.value.price
        this.product.productImage=this.productform.value.productImage
       
    if(this.productId){
      console.log(this.product)
      this.dashboardService.editProduct( this.product,this.productId).subscribe((response) => {
        window.location.reload();
       })
      
    }
    else{
        this.dashboardService.addProduct(this.product).subscribe((response) => {
          window.location.reload();
      })}
      this.router.navigate(['/products'])  
      }
}
