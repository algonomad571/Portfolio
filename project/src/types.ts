export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'web2' | 'web3';
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  comingSoon?: boolean;
}