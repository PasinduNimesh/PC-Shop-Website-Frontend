import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  hidden = false;

  // toggleHidden() {
  //   this.hidden = !this.hidden;
  // }
}
