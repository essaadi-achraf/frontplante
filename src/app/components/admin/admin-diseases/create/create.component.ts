import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogContent,
    MatDialogActions,
    MatList,
    MatListItem
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  plantForm: FormGroup;
  diseaseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateComponent>
  ) {
    this.plantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      region: ['', Validators.required],
      uses: ['', Validators.required],
      diseases: [[]],  // Array for storing selected diseases
    });

    this.diseaseForm = this.fb.group({
      name: ['', Validators.required], // For adding a new disease
    });
  }

  onSubmit() {
    if (this.plantForm.valid) {
      // Send the form data back to the parent component
      const formData = this.plantForm.value;
      this.dialogRef.close(formData);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  addDisease() {
    if (this.diseaseForm.valid) {
      const diseaseName = this.diseaseForm.get('name')?.value;
      const diseases = this.plantForm.get('diseases')?.value;
      diseases.push({ name: diseaseName });
      this.plantForm.patchValue({ diseases });
      this.diseaseForm.reset();  // Reset disease form field after adding
    }
  }
}
