import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './app-admin-navbar.component.html',
  styleUrls: ['./app-admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(private router: Router) {}

  navItems = [
    { icon: 'dashboard', label: 'Dashboard', action: () => this.router.navigate(['/admin/dashboard']) },
    { icon: 'people', label: 'Users', action: () => this.router.navigate(['/admin/users']) },
    { icon: 'local_florist', label: 'Plants', action: () => this.router.navigate(['/admin/plants']) },
    { icon: 'article', label: 'Articles', action: () => this.router.navigate(['/admin/articles']) },
    { icon: 'health_and_safety', label: 'Diseases', action: () => this.router.navigate(['/admin/diseases']) },
    { icon: 'person', label: 'Profile', action: () => this.router.navigate(['/admin/profile']) },
    { icon: 'logout', label: 'Logout', action: () => this.router.navigate(['/auth/login']) }
  ];
}
