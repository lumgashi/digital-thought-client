export interface NavigationType {
  id: number;
  title: string;
  href: string;
}

export const navigationItems: NavigationType[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Articles', href: '/articles' },
  { id: 3, title: 'Authors', href: '/authors' },
];
