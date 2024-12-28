import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { UserProfile} from '../models/user-profile.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userProfile: UserProfile = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Herbal Medicine Enthusiast',
    avatar: 'https://cdn.icon-icons.com/icons2/4222/PNG/512/princess_diana_of_wales_avatar_icon_263201.png',
    stats: {
      articles: 12,
      plants: 45,
      comments: 89
    }
  };


}
