import {Component, inject, signal} from '@angular/core';
import { Diseases } from '../../models/disease';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-disease-management',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './disease-management.component.html',
  standalone: true,
  styles: [`
    .disease-chip-list {
      width: 100%;
    }
  `],
})
export class DiseaseManagementComponent {
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  nextId = 4; // Starting from 4 since we have 3 initial diseases
  readonly diseases = signal<Diseases[]>([
    {id: 1, name: 'Anxiety'},
    {id: 2, name: 'Insomnia'},
    {id: 3, name: 'Headache'}
  ]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.diseases.update(diseases => [...diseases, {id: this.nextId++, name: value}]);
    }

    event.chipInput!.clear();
  }

  remove(disease: Diseases): void {
    this.diseases.update(diseases => {
      const index = diseases.indexOf(disease);
      if (index < 0) {
        return diseases;
      }
      const newDiseases = [...diseases];
      newDiseases.splice(index, 1);
      this.announcer.announce(`Removed ${disease.name}`);
      return newDiseases;
    });
  }

  edit(disease: Diseases, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(disease);
      return;
    }

    this.diseases.update(diseases => {
      const index = diseases.indexOf(disease);
      if (index >= 0) {
        const newDiseases = [...diseases];
        newDiseases[index] = { ...disease, name: value };
        return newDiseases;
      }
      return diseases;
    });
  }
}
