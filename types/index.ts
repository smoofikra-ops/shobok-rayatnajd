export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string;
  image?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  completionDate?: string;
}
