import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  catId:number=0;
  products:any;
  images:any


  @Output() priceChanged = new EventEmitter<number>();

  sendPrice(price:any) {
    this.priceChanged.emit(price);
    console.log('sendPrice was called')
  }

  addProduct(product:any){
    this.shared.products.push(product)
  }

  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    public dialog: MatDialog,
    private shared: SharedService
  ){}

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.catId = params['cid']
      console.log(this.catId)
      this.productService.getProductsByCategory(this.catId).subscribe((data) => {
        this.products = data;
        console.log(this.products);
      })
    })


  }

  openDialog(price:any,name:any,product:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        productname: name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sendPrice(price);
        this.addProduct(product);
      }
    });
  }


}
