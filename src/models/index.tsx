export interface DescribedLink {
  description: string;
  href: string;
  icon?: string;
}

export interface LinksType {
  assets?: DescribedLink[];
  repo?: string[];
  documentation?: string[];
}

export interface Markdown {
  raw: string;
  html: string;
}

export interface DocumentModel {
  _id: string;
  type: 'Post' | 'Stub' | 'Archive';
  isPublished?: boolean;
  title: string[];
  keywords?: string[];
  description?: Markdown;
  status?: Markdown;
  links?: LinksType;
}
