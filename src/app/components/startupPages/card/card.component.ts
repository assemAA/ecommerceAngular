import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
products:any[]=[{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/07/6997C43E-435D-40D6-B614-1422CD8813B7-1024x1024.jpg",
  proName:" Caramel Macchiato",
  


},{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/07/91F03B67-957B-4AE9-9304-912AE2EFBDDF-1024x1024.jpg",
  proName:"Matcha Latte",
  


},{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/11/232A4908-6056-45BD-8ED5-D03778D21EA5-1024x1024.jpg",
  proName:"Flavored Caffe Latte",
 

},
{
  img:"https://www.couvee.co.id/wp-content/uploads/2019/07/F03B2AB7-12B6-47F6-AA82-3B924C32F96D-1024x1024.jpg",
  proName:" Black Cookie Latte",
  


}

]
}