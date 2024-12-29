import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DiseaseManagementComponent} from '../../../profile/disease-management/disease-management.component';
import {Diseases} from '../../../models/plant.model';
import {CreateComponent} from './create/create.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']

})
export class AdminUsersComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive' }
  ];
  constructor(private dialog: MatDialog) {}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Add new user to the users array
        const newUser = {
          id: this.users.length + 1,
          ...result
        };
        this.users.push(newUser);
      }
    });

  }
  showAddUserModal = false;

  editUser(user: any) {
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    console.log('Delete user:', user);
  }
}
