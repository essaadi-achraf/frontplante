import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-plants',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl:'./admin-plants.component.html',
  styleUrls: ['./admin-plants.component.css']

})
export class AdminPlantsComponent {
  plants = [
    {
      id: 1,
      name: 'Lavender',
      region: 'Mediterranean',
      uses: ['Anxiety', 'Insomnia', 'Headache']
    },
    {
      id: 2,
      name: 'Ginger',
      region: 'South Asia',
      uses: ['Nausea', 'Inflammation', 'Digestive Issues']
    }
  ];

  showAddPlantModal = false;

  editPlant(plant: any) {
    console.log('Edit plant:', plant);
  }

  deletePlant(plant: any) {
    console.log('Delete plant:', plant);
  }
}
