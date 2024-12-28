import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-plants',
  imports: [NavbarComponent],
  templateUrl: './plants.component.html',
  standalone: true,
  styleUrl: './plants.component.css'
})
export class PlantsComponent {

}
