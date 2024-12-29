import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { UserProfile} from '../models/user-profile.model';
import {MatIcon} from "@angular/material/icon";
import {Diseases} from '../models/plant.model';
import {MatDialog} from '@angular/material/dialog';
import {DiseaseManagementComponent} from './disease-management/disease-management.component';

@Component({
  selector: 'app-profile',
  standalone: true,
    imports: [CommonModule, MatCardModule, MatTabsModule, MatIcon],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userProfile: UserProfile = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Herbal Medicine Enthusiast',
    disease: [] as Diseases[],
    avatar: 'https://cdn.icon-icons.com/icons2/4222/PNG/512/princess_diana_of_wales_avatar_icon_263201.png',
    stats: {
      articles: 12,
      plants: 45,
      comments: 89,
      disease:3,
    },
  };

  constructor(private dialog: MatDialog) {}

  openDiseaseDialog(): void {
    const dialogRef = this.dialog.open(DiseaseManagementComponent, {
      width: '500px',
      data: { diseases: this.userProfile.disease }
    });

    dialogRef.afterClosed().subscribe((result: Diseases[]) => {
      if (result) {
        this.userProfile.disease = result;
      }
    });
  }
}
