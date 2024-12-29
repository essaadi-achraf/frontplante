export interface Plant {
  id: number;
  name: string;
  description: string;
  image: string;
  region: string;
  diseases: Diseases[];
  uses: string[];
}
export interface Diseases {
  id: number;
  name: string;
}
