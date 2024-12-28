import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {AdminNavbarComponent} from '../app-admin-navbar/app-admin-navbar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [AdminNavbarComponent, RouterOutlet, MatIconModule],
  template: `
    <div class="d-flex vh-100">
      <app-admin-navbar></app-admin-navbar>
      <div class="flex-grow-1 overflow-auto p-4 bg-light">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AdminLayoutComponent {}
