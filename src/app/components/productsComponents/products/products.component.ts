import { productService } from 'src/app/services/products.services';
import { Component, OnInit } from '@angular/core';
//import { Iprodect } from '../../../models/products';
import { Router } from '@angular/router';
import { CardService } from '../../../services/card.service';
import { BuyProcessService } from '../../../services/buy-process.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  loginStatus : string |undefined |null = ""
  
  constructor(
    private productService: productService,
    private router: Router,
    public buyProcess : BuyProcessService
  ) {

    if (!localStorage.getItem('token')) {
      this.router.navigate(['/userLogin']);
    }

    
  }

  productsList: any;

  ngOnInit(): void {
    this.productService.getproducts().subscribe((response: any) => {
      this.productsList = Object.values(response);
      console.log(this.productsList);
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
}
