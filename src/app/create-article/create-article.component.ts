import { Component } from '@angular/core';
import {Article} from '../models/article.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {
  newArticle: Article = {
    id: 0, // You'll need to set this when saving the article (e.g., after a database insertion)
    title: '',
    content: '',
    images: [],
    authorName: '',
    authorImage: '',
    likes: 0,
    comments: [],
    createdAt: new Date(),
    liked: false
  };

  // This method handles the file selection and stores the image URL (for demonstration)
  onFileSelected(event: any, field: string) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0] as Blob; // Explicitly cast the file to type 'Blob'
      const reader = new FileReader();
      reader.onload = () => {
        const fileUrl = reader.result as string;
        if (field === 'authorImage') {
          this.newArticle.authorImage = fileUrl; // Store the author image URL
        } else if (field === 'images') {
          // Add the image URLs to the images array
          this.newArticle.images.push(URL.createObjectURL(file)); // Create URL for the file
        }
      };
      reader.readAsDataURL(file); // Read the first file
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.newArticle.title && this.newArticle.content && this.newArticle.authorName && this.newArticle.authorImage && this.newArticle.images.length) {
      console.log('New Article Submitted:', this.newArticle);
      // Reset form after submission
      this.newArticle = {
        id: 0,
        title: '',
        content: '',
        images: [],
        authorName: '',
        authorImage: '',
        likes: 0,
        comments: [],
        createdAt: new Date(),
        liked: false
      };
    }
  }
}
