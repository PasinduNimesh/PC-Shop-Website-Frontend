import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { SharedService } from '../services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';


@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit{

  @ViewChild(MatTable) table: any;

  constructor(
    private shared:SharedService,
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {
    console.log(this.dataSource)
    this.getTotal(this.dataSource)
  }


 @Input() dataSource = this.shared.products
 total:number =0

 getTotal(dataSource:any){
  const totalPrice = dataSource.reduce((sum:any, product:any) => sum + product.price, 0);
  this.total = totalPrice
 }


 removeItemFromQuotaion(item: any): void {
  const index = this.dataSource.indexOf(item);
  if (index !== -1) {
      this.dataSource.splice(index, 1);
  }
  this.table.renderRows();
}

openDialog(name:any,item:any): void {
  const dialogRef = this.dialog.open(DialogConfirmComponent, {
    width: '250px',
    data: {
      productname: name
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.removeItemFromQuotaion(item)
      this.getTotal(this.dataSource)
    }
  });
}

 displayedColumns: string[] = ['image','category', 'name', 'description', 'price','view','remove'];

}
