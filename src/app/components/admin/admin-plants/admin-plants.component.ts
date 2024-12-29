import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; // Ensure MatIconModule is imported
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule for table functionality
import { CreateComponent } from './create/create.component';
import { CommonModule } from '@angular/common';
import {EditComponent} from './edit/edit.component'; // Import CommonModule for *ngIf directive

@Component({
  selector: 'app-admin-plants',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    CommonModule, // Add this for *ngFor functionality
  ],
  templateUrl: './admin-plants.component.html',
  styleUrls: ['./admin-plants.component.css']
})
export class AdminPlantsComponent {
  plants = [
    {
      id: 1,
      name: 'Lavender',
      region: 'Mediterranean',
      diseases: ['Anxiety', 'Insomnia', 'Headache']
    },
    {
      id: 2,
      name: 'Ginger',
      region: 'South Asia',
      diseases: ['Nausea', 'Inflammation', 'Digestive Issues']
    }
  ];

  displayedColumns: string[] = ['name', 'region', 'diseases', 'actions']; // Define the columns

  constructor(private dialog: MatDialog) {}

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newPlant = {
          id: this.plants.length + 1,
          ...result,
        };
        this.plants.push(newPlant); // Add new plant after dialog is closed
      }
    });
  }
  editPlant(plant: any) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      data: plant // Pass the plant data to the edit dialog
    });

    dialogRef.afterClosed().subscribe((updatedPlant) => {
      if (updatedPlant) {
        // Find the plant by id and update it with the new data
        const index = this.plants.findIndex((p) => p.id === plant.id);
        if (index !== -1) {
          this.plants[index] = { ...this.plants[index], ...updatedPlant };
        }
      }
    });
  }

  deletePlant(plant: any) {
    console.log('Delete plant:', plant);
  }
}
