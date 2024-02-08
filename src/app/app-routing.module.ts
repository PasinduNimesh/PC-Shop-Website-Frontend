import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { QuotationComponent } from './quotation/quotation.component';

const routes: Routes = [
{
  path:'upload-image',
  component:UploadImageComponent
},
{
  path:'product',
  component:NavigationComponent,
  children:[
    {
      path:':cid',
      component:ProductComponent
    },
    {
      path:'p/:pid',
      component:ViewProductComponent
    },
    {
      path:'q/quotation',
      component:QuotationComponent,
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
