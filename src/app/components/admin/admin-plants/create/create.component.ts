import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatOption,
    MatSelect,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    CommonModule  // Import CommonModule for ngIf and ngFor
  ],
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  plantForm: FormGroup;
  diseasesList: string[] = ['Disease 1', 'Disease 2', 'Disease 3', 'Disease 4'];

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CreateComponent>) {
    this.plantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      region: ['', Validators.required],
      diseases: [[], Validators.required]  // Array for storing selected diseases
    });
  }

  onSubmit() {
    if (this.plantForm.valid) {
      const formData = this.plantForm.value;
      this.dialogRef.close(formData);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
