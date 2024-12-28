import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}
  recentUsers = [
    { name: 'John Doe', email: 'john@example.com', date: '2024-03-20' },
    { name: 'Jane Smith', email: 'jane@example.com', date: '2024-03-19' },
    { name: 'Mike Johnson', email: 'mike@example.com', date: '2024-03-18' }
  ];

  recentArticles = [
    { title: 'Benefits of Chamomile', author: 'Dr. Smith', date: '2024-03-20' },
    { title: 'Healing with Lavender', author: 'Jane Doe', date: '2024-03-19' },
    { title: 'Ginger Properties', author: 'Dr. Johnson', date: '2024-03-18' }
  ];

  navigateArticles() {
    this.router.navigate(['/admin/articles']);
  }

  navigateUsers() {
    this.router.navigate(['/admin/users']);
  }
}
