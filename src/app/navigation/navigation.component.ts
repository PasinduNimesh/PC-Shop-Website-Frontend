import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CategoryService } from '../services/category.service';
import { SharedService } from '../services/shared.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  categories:any;
  
  total = 0;

  activateChild(component: any) {
    component.priceChanged.subscribe((price:any) => this.updateToatal(price));
    console.log('activateChild was called')
  }

  updateToatal(price:any){
    this.total = this.total + price;
    console.log(' updateToatal was called')
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private category: CategoryService,
    private shared: SharedService
    ) {}


  ngOnInit(): void {
    this.category.getCategoris().subscribe((data:any)=>{
      this.categories = data;
      console.log(this.categories)
    })
  }
  
 
}
