import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-articles',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl:'./admin-articles.component.html',
})
export class AdminArticlesComponent {
  articles = [
    {
      id: 1,
      title: 'Benefits of Chamomile',
      content: 'Chamomile has been used for centuries...',
      authorName: 'Dr. Sophie Martin',
      createdAt: new Date('2024-03-20'),
      likes: 125,
      comments: [{ id: 1, authorName: 'John', content: 'Great article!' }]
    },
    {
      id: 2,
      title: 'Healing with Lavender',
      content: 'Lavender is known for its calming properties...',
      authorName: 'Dr. John Smith',
      createdAt: new Date('2024-03-19'),
      likes: 98,
      comments: []
    }
  ];

  showAddArticleModal = false;

  editArticle(article: any) {
    console.log('Edit article:', article);
  }

  deleteArticle(article: any) {
    console.log('Delete article:', article);
  }
}
