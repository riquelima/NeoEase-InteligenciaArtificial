
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string[];
  industry: string;
  imageUrl: string;
  results: {
    label: string;
    value: string;
  }[];
}
