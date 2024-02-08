import { Component, EventEmitter, Output } from '@angular/core';
import { ImageLinks } from 'src/assets/image-links';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {

  link1 = ImageLinks.office_lap;
  link2 = ImageLinks.gaming_lap;

  @Output()
  increment = new EventEmitter<void>();
}
