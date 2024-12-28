import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../plants/navbar/navbar.component';

@Component({
  selector: 'app-layout-with-navbar',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <div class="d-flex vh-100">
      <!-- Sidebar -->
      <app-navbar></app-navbar>

      <!-- Main Content -->
      <div class="flex-grow-1 overflow-auto p-4 bg-light">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [``]
})
export class LayoutWithNavbarComponent {}
