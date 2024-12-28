import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutWithNavbarComponent } from './layout-with-navbar/layout-with-navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PlantsArticlesComponent } from './plants/plants-articles/plants-articles.component';
import { PlantsListComponent } from './plants/plants-list/plants-list.component';
import {AdminLayoutComponent} from './components/admin/admin-layout/admin-layout.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {AdminUsersComponent} from './components/admin/admin-users/admin-users.component';
import {AdminPlantsComponent} from './components/admin/admin-plants/admin-plants.component';
import {AdminArticlesComponent} from './components/admin/admin-articles/admin-articles.component';
import {AdminProfileComponent} from './components/admin/admin-profile/admin-profile.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },

  // User routes
  {
    path: '',
    component: LayoutWithNavbarComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'articles', component: PlantsArticlesComponent },
      { path: 'plants', component: PlantsListComponent },
    ]
  },

  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'plants', component: AdminPlantsComponent },
      { path: 'articles', component: AdminArticlesComponent },
      { path: 'profile', component: AdminProfileComponent },
      //{ path: 'diseases', component: AdminDiseaseManagementComponent }
    ]
  },

  { path: '**', redirectTo: 'auth/login' }
];
