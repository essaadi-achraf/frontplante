export interface Article {
  id: number;
  title: string;
  content: string;
  images: string[];
  authorName: string;
  authorImage: string;
  likes: number;
  comments: Comment[];
  createdAt: Date;
  liked?: boolean;
}
export interface Comment {
  id: number;
  authorName: string;
  content: string;
  createdAt: Date;
}
