import { Component, OnInit } from '@angular/core';

export interface myQuotation{
  image:string;
  category:string;
  name:string;
  description:string;
  price:number;
}



@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent{

 PRODUCT_DATA: myQuotation[] = [{
 image:'bytearray',
 category:'Desktop',
 name:'Gaming PC',
 description:'This is for gaming',
 price:100000,
 }];

 dataSource = this.PRODUCT_DATA

 displayedColumns: string[] = ['image','category', 'name', 'description', 'price'];

//  PRODUCT_DATA: myQuotation[] = [];

//  setProducts(product:myQuotation){
//   this.PRODUCT_DATA.push(product)
//  }
}
