import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './admin-profile.component.html',
})
export class AdminProfileComponent {
  adminProfile = {
    name: 'Admin User',
    role: 'System Administrator',
    email: 'admin@example.com',
    avatar: 'https://cdn.icon-icons.com/icons2/4222/PNG/512/princess_diana_of_wales_avatar_icon_263201.png',
    joinedDate: new Date('2024-01-01'),
    stats: {
      plantsAdded: 45,
      articlesPublished: 23,
      usersManaged: 150
    }
  };
}
