export interface UserProfile {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  disease:Diseases[];
  stats: {
    articles: number;
    plants: number;
    comments: number;
    disease:number;
  };
}
export interface Diseases {
  id: number;
  name: string;
}
