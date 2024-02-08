import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subdetails',
  templateUrl: './subdetails.component.html',
  styleUrls: ['./subdetails.component.css']
})
export class SubdetailsComponent {

  @Input()
  messageFromParent:string='';

  @Output()
  messageFromChild = new EventEmitter<string>();

  sendValue(value:string){
    this.messageFromChild.emit(value);
  }
}
