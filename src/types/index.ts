import { DivideIcon as LucideIcon } from 'lucide-react';

export interface NavDropdownItem {
  icon: LucideIcon;
  title: string;
  description?: string;
  link: string;
}

export interface NavItem {
  title: string;
  dropdown?: NavDropdownItem[];
}