import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Correct module for mat-icon
import { CommonModule } from '@angular/common'; // Common module for ngFor
import { CreateComponent } from './create/create.component';
import { Diseases } from '../../../models/disease';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-diseases',
  templateUrl: './admin-diseases.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule], // Include CommonModule for ngFor
  styleUrls: ['./admin-diseases.component.css']
})
export class AdminDiseasesComponent {
  diseases = [
    { id: 1, name: 'Disease A' },
    { id: 2, name: 'Disease B' },
    { id: 3, name: 'Disease C' }
  ];

  constructor(private dialog: MatDialog) {}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newDisease = {
          id: this.diseases.length + 1,
          ...result
        };
        this.diseases.push(newDisease);
      }
    });
  }

  deleteDisease(disease: Diseases): void {
    console.log('Delete disease:', disease);
    // Deletion logic
  }
}
