
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input() myproduct:any={}

  constructor() { }

  ngOnInit(): void {
    console.log( this.myproduct)
  }


}
