export interface UserProfile {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  stats: {
    articles: number;
    plants: number;
    comments: number;
  };
}
