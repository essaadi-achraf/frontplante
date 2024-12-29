import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cdr.detectChanges(); // Forcer la détection des changements
  }
  navItems = [
    { icon: 'home', label: 'Home', action: () => this.home() },
    { icon: 'local_florist', label: 'Plants', action: () => this.plants() },
    { icon: 'account_circle', label: 'Profile', action: () => this.profile() },
    { icon: 'library_add', label: 'New Article', action: () => this.createArticle() },
    { icon: 'logout', label: 'Logout', action: () => this.logout() },
  ];

  logout() {
    this.router.navigate(['auth/login']);
  }

  home() {
    this.router.navigate(['articles']);
  }

  plants() {
    this.router.navigate(['plants']);
  }

  profile() {
    this.router.navigate(['profile']);
  }
  createArticle() {
    this.router.navigate(['createarticle']);
  }
}
