import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
 
proId:any;
product:any;

constructor(
  private service: ProductService,
  private activatedRoute:ActivatedRoute
){}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      this.proId = params['pid']
      this.service.getProduct(this.proId).subscribe((data) => {
        this.product = data;
        console.log(this.product);
      })
    })
  }

}
