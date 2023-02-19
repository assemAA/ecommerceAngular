import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
products:any[]=[{
  img:"https://coffeenmore.co/wp-content/uploads/2022/12/costa-warming-lungo-300x300.jpg",
  proName:" Brazil Organic",
  description:"ddhsddhshd",
  price:"120",

},{
  img:"https://coffeenmore.co/wp-content/uploads/2023/01/lavazza-crema-ricca-1-kg-300x300.jpg",
  proName:"Esperanza De Colombia",
  description:"ddhsddhshd",
  price:"120",

},{
  img:"https://coffeenmore.co/wp-content/uploads/2022/11/ILLY-guatemala-beans-300x300.jpg",
  proName:"coffee pods",
  

},
{
  img:"https://cdn.shopify.com/s/files/1/0479/2074/2554/products/CoffeeImage_700x.jpg?v=1601350619",
  proName:"Ground Coffee ",
  

},{
  img:"https://cdn.shopify.com/s/files/1/0381/4634/2956/products/Paldo-TeumsaeStirFriedKoreamRamen-130g-5-648436122585_360x.jpg?v=1675707730",
  proName:"Caramelized Almonds",
  

},{
  img:"https://cdn.shopify.com/s/files/1/0381/4634/2956/products/Starbucks-NescafeDolceGusto-WhiteMocha-12capsules_360x.jpg?v=1673288163",
  proName:"Taylors of Harrogate",
  

},{
  img:"https://cdn.shopify.com/s/files/1/0381/4634/2956/products/RitterSport-CrispyCoffee-100g-24-4000417694119_360x.jpg?v=1675707849",
  proName:"Crispy Coffee",
  

},{
  img:"https://cdn.shopify.com/s/files/1/0381/4634/2956/products/RitterSport-CaramelizedAlmonds-100g-12-47.5-65-4000417296009_360x.jpg?v=1675983633",
  proName:"Starbucks ",
  

},{
  img:"https://cdn.shopify.com/s/files/1/0381/4634/2956/products/Nespresso-EsperanzaDeColombia-LimitedEdition-10capsules_540x.jpg?v=1666209679",
  proName:"Paldo",
  

}]
}
