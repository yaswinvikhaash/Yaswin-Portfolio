export interface Skill {
  name: string;
  icon: string;
  glowColor: string;
}

export interface Project {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  tags: string[];
  description: string;
  contributions: string[];
  stack: { label: string; icon: string }[];
  impact: { label: string; value: string }[];
  logoText: string;
  logoBg: string;
}

export interface Experience {
  company: string;
  companyShort: string;
  companyBg: string;
  period: string;
  location: string;
  roles: Role[];
}

export interface Role {
  title: string;
  client: string;
  period: string;
  description: string;
  isCurrent: boolean;
  isPromoted: boolean;
  techPills: string[];
}

export interface Social {
  label: string;
  href: string;
  svgPath: string;
  svgColor: string;
  bg: string;
}
