// Certificate data type
export interface Certificate {
  id: string;
  filename: string;
  title: string;
  type: string;
  hours: number;
  date: string;
  category: string;
  platform: string;
  url: string;
}

// Experience data type
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  tags?: string[];
}

// Project data type
export interface Project {
  name: string;
  description: string;
  tags: string[];
  highlight?: boolean;
  github?: string;
  demo?: string;
}

// Skill category type
export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

// Nav section type
export interface NavSection {
  id: string;
  label: string;
}
