
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {Diseases} from '../../models/disease';
import {Plant} from '../../models/plant.model';


@Component({
  selector: 'app-plants-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent {

  plants: Plant[] = [
    {
      id: 1,
      name: 'Lavender',
      description: 'A fragrant herb known for its calming properties and versatile medicinal uses.',
      image: 'https://static.vecteezy.com/system/resources/previews/016/539/743/original/watercolor-lavender-flower-clip-art-png.png',
      region: 'Mediterranean',
      diseases: [  // Properly structured Diseases array
        {
          id: 1,
          name: 'Anxiety'
        },
        {
          id: 2,
          name: 'Insomnia'
        }
      ],
      uses: ['Aromatherapy', 'Tea', 'Essential Oil']
    },
    {
      id: 2,
      name: 'Ginger',
      description: 'A powerful root with anti-inflammatory and digestive properties.',
      image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-ginger-png-image_13362318.png',
      region: 'South Asia',
      diseases: [  // Properly structured Diseases array
        {
          id: 4,
          name: 'Nausea'
        },
        {
          id: 5,
          name: 'Inflammation'
        },
        {
          id: 6,
          name: 'Digestive Issues'
        }
      ],
      uses: ['Tea', 'Cooking', 'Supplements']
    }
  ];
}
