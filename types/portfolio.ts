import { PortfolioStatus } from '@/enums/portfolio';

export type Portfolio = {
  id: number;
  name: string;
  translationKey: string;
  image: string | null;
  link: string | null;
  github?: string;
  status: PortfolioStatus;
  techStack: string[];
};
