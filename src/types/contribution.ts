export type PRStatus = 'merged' | 'open';

export interface ContributionPR {
  title: string;
  number: number;
  url: string;
  status: PRStatus;
}

export interface ContributionRepo {
  org: string;
  repo: string;
  prs: ContributionPR[];
}
