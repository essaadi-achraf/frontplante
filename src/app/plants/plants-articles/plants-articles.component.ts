import {ChangeDetectorRef, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Article,Comment } from '../../models/article.model';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-plants-articles',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule, MatChipsModule
  ],
  templateUrl: './plants-articles.component.html',
  styleUrls: ['./plants-articles.component.css']
})
export class PlantsArticlesComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  newComment: string = '';
  articles: Article[] = [
    {
      id: 1,
      title: 'Benefits of Chamomile',
      content: 'Chamomile has been used for centuries as a natural remedy for various ailments. This gentle herb is particularly known for its calming properties...',
      images: ['https://th.bing.com/th/id/OIP.Mp6v6vyylbmTzcM7UY0prwHaHa?rs=1&pid=ImgDetMain'],
      authorName: 'Dr. Sophie Martin',
      authorImage: 'https://cdn.icon-icons.com/icons2/4222/PNG/512/princess_diana_of_wales_avatar_icon_263201.png',
      likes: 125,
      comments: [
        {
          id: 1,
          authorName: 'John Doe',
          content: 'Great article! I use chamomile tea every night.',
          createdAt: new Date()
        }
      ],
      createdAt: new Date(),
      liked: false // Ajout de la propriété liked initialisée à false
    }
  ];

  likeArticle(article: Article) {
    article.liked = !article.liked;
    article.likes += article.liked ? 1 : -1;
    this.cdr.detectChanges();
  }

  addComment(article: Article) {
    if (this.newComment.trim()) {
      const newComment: Comment = {
        id: article.comments.length + 1,
        authorName: 'Current User',
        content: this.newComment,
        createdAt: new Date()
      };
      article.comments.push(newComment);
      this.newComment = '';
      this.cdr.detectChanges();
    }
  }
}
