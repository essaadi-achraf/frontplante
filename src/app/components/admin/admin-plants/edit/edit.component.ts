import { Component, Inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions} from '@angular/material/dialog';
import {MatError, MatFormFieldModule} from '@angular/material/form-field'; // For mat-label
import { MatInputModule } from '@angular/material/input'; // For matInput
import { MatSelectModule } from '@angular/material/select'; // For mat-select
import {CommonModule} from '@angular/common'; // For mat-error

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,  // Import MatFormFieldModule
    MatInputModule,      // Import MatInputModule
    MatSelectModule,     // Import MatSelectModule
    MatError,      // Import MatErrorModule
    CommonModule,
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogActions,
    // Import CommonModule for *ngIf
  ],
})
export class EditComponent {
  plantForm: FormGroup;
  diseasesList: string[] = ['Disease 1', 'Disease 2', 'Disease 3', 'Disease 4'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public plantData: any // Inject the plant data
  ) {
    // Initialize the form with the plant's current data
    this.plantForm = this.fb.group({
      name: [this.plantData.name, Validators.required],
      description: [this.plantData.description, Validators.required],
      region: [this.plantData.region, Validators.required],
      diseases: [this.plantData.diseases, Validators.required]
    });
  }

  onSubmit() {
    if (this.plantForm.valid) {
      const updatedPlant = this.plantForm.value;
      this.dialogRef.close(updatedPlant); // Close the dialog and return the updated plant data
    }
  }

  onCancel() {
    this.dialogRef.close(); // Close the dialog without saving changes
  }
}
