import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ImageLinks } from 'src/assets/image-links';

@Component({
  selector: 'app-desktops',
  templateUrl: './desktops.component.html',
  styleUrls: ['./desktops.component.css']
})
export class DesktopsComponent implements OnInit{

  constructor(
    private service:ProductService
  ){}

  link1 = ImageLinks.office_pc;
  link2 = ImageLinks.gaming_pc;

  products:any;

  @Output()
  increment = new EventEmitter<void>();

  ngOnInit(): void {
    this.service.getProducts().subscribe((data:any)=>{
      this.products = data;
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  }
 
}
