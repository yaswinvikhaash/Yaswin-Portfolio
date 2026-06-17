import { AboutCard, Experience, Project, Skill } from './portfolio.models';

export const ABOUT_CARDS: AboutCard[] = [
  {
    icon: '🏗️',
    iconBg: 'rgba(108,140,255,0.1)',
    title: 'Enterprise Headless Architecture',
    description: 'Specialist in decoupled, enterprise-grade architectures. Bridging modern React/Next.js front-ends with headless CMS platforms using robust GraphQL data layers.',
    hoverColor: '#6c8cff',
  },
  {
    icon: '⚡',
    iconBg: 'rgba(167,139,250,0.1)',
    title: 'Next.js & Performance Optimization',
    description: 'Leveraging advanced Next.js features — SSR, SSG, App Router — for lightning-fast, SEO-optimized apps. Implementing smart hydration for superior Core Web Vitals.',
    hoverColor: '#a78bfa',
  },
  {
    icon: '🚀',
    iconBg: 'rgba(129,140,248,0.1)',
    title: 'End-to-End Project Ownership',
    description: 'Proven ability to drive complex feature development independently from conception to UAT. Acting as a critical resource in Agile delivery environments.',
    hoverColor: '#818cf8',
  },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript ES6+', icon: '🟨', glowColor: '#f7df1e' },
  { name: 'TypeScript', icon: '🔷', glowColor: '#3178c6' },
  { name: 'React.js 18', icon: '⚛️', glowColor: '#61dafb' },
  { name: 'Next.js 13+', icon: '▲', glowColor: '#ffffff' },
  { name: 'GraphQL', icon: '◈', glowColor: '#e535ab' },
  { name: 'Apollo GraphQL', icon: '🔵', glowColor: '#311c87' },
  { name: 'React Query', icon: '🔴', glowColor: '#ff4154' },
  { name: 'Redux', icon: '🟣', glowColor: '#764abc' },
  { name: 'Context API', icon: '⚛️', glowColor: '#61dafb' },
  { name: 'HTML5', icon: '🟠', glowColor: '#e34f26' },
  { name: 'CSS3', icon: '🔵', glowColor: '#1572b6' },
  { name: 'Tailwind CSS', icon: '🌊', glowColor: '#38bdf8' },
  { name: 'Bootstrap', icon: '🟣', glowColor: '#7952b3' },
  { name: 'SASS', icon: '💅', glowColor: '#cc6699' },
  { name: 'REST APIs', icon: '🔌', glowColor: '#ff6c37' },
  { name: 'SSR & SSG', icon: '▲', glowColor: '#ffffff' },
];

export const TOOLS: Skill[] = [
  { name: 'Git & GitHub', icon: '🟠', glowColor: '#f05032' },
  { name: 'Azure DevOps', icon: '🔵', glowColor: '#0078d7' },
  { name: 'AWS AppSync', icon: '☁️', glowColor: '#ff9900' },
  { name: 'AEM Headless', icon: '🔴', glowColor: '#ff0000' },
  { name: 'Sitecore JSS', icon: '🟥', glowColor: '#ff0000' },
  { name: 'Figma', icon: '🎨', glowColor: '#f24e1e' },
  { name: 'VS Code', icon: '🟣', glowColor: '#563d7c' },
  { name: 'Chrome DevTools', icon: '🐛', glowColor: '#4285f4' },
];

export const PROJECTS: Project[] = [
  {
    id: 'mastercard',
    name: 'Mastercard Customer Portals',
    subtitle: 'Customer Rewards Dashboard',
    period: 'Dec 2023 – Jun 2025 · Chennai, India',

    tags: ['Transaction Platform', 'Payments', 'Financial Services', 'Scalable UI'],
    description:
      'Built reusable, high-performance frontend components for Mastercard portals ensuring scalability, security, and compliance across multiple customer-facing workflows.',
    contributions: [
      'Developed reusable and scalable UI components using Next.js, React, and TypeScript',
      'Integrated GraphQL APIs via AWS AppSync for optimized, real-time data flow',
      'Consumed structured content from AEM Headless CMS and mapped to frontend components',
      'Implemented Zustand for shared state management, reducing unnecessary re-renders',
      'Built fully responsive layouts using Tailwind CSS across multiple breakpoints',
      'Collaborated with product owners and BAs to align UI logic with compliance requirements',
    ],
    stack: [
      { icon: '▲', label: 'Next.js' },
      { icon: '⚛️', label: 'React' },
      { icon: '🔷', label: 'TypeScript' },
      { icon: '◈', label: 'GraphQL' },
      { icon: '☁️', label: 'AWS AppSync' },
      { icon: '🔴', label: 'AEM Headless' },
      { icon: '⚛️', label: 'Zustand' },
      { icon: '🌊', label: 'Tailwind CSS' },
      { icon: '🔵', label: 'Azure DevOps' },
    ],
    impact: [
      { label: 'Component Reusability', value: 'High' },
      { label: 'Performance', value: 'Optimised for real-time data' },
      { label: 'Scale', value: 'Enterprise portals' },
    ],
  },
  {
    id: 'hmh',
    name: 'Hackensack Meridian Health',
    subtitle: 'Patient Engagement Platform',
    period: 'Mar 2026 – Present · Remote',
    logoText: 'HMH',
    logoBg: '#0055a5',
    tags: ['Healthcare', 'Accessibility', 'SEO', 'Patient-facing'],
    description:
      'Building a scalable Next.js + Sitecore JSS frontend for a major healthcare system, delivering accessible and SEO-optimised patient-facing experiences.',
    contributions: [
      'Architected Next.js component library integrated with Sitecore JSS headless CMS',
      'Implemented WCAG 2.1 AA accessibility standards across all patient-facing pages',
      'Optimised Core Web Vitals achieving green scores across all key pages',
      'Built CI/CD pipelines via Azure DevOps for automated deployments',
      'Created GraphQL data layer connecting Sitecore content to frontend components',
    ],
    stack: [
      { icon: '▲', label: 'Next.js' },
      { icon: '⚛️', label: 'React.js' },
      { icon: '🔷', label: 'TypeScript' },
      { icon: '🟥', label: 'Sitecore JSS' },
      { icon: '◈', label: 'GraphQL' },
      { icon: '💅', label: 'SASS' },
      { icon: '🔵', label: 'Azure DevOps' },
    ],
    impact: [
      { label: 'Accessibility', value: 'WCAG 2.1 AA' },
      { label: 'Performance', value: 'Green Core Web Vitals' },
      { label: 'Scale', value: 'Healthcare enterprise' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Syncfusion',
    logoText: 'Sy',
    period: 'Sept 2023 – Present',
    location: 'Chennai, India',
    roles: [
      {
        title: 'Packaged App Development Analyst',
        client: 'Hackensack Meridian Health',
        period: 'Mar 2026 – Present',
        badge: 'current',
        description:
          'Building scalable Next.js + Sitecore JSS frontend for a healthcare system, delivering accessible and SEO-optimised patient-facing experiences with GraphQL APIs and CI/CD via Azure DevOps.',
        techs: [
          { icon: '▲', label: 'Next.js' },
          { icon: '⚛️', label: 'React.js' },
          { icon: '🔷', label: 'TypeScript' },
          { icon: '🟥', label: 'Sitecore JSS' },
          { icon: '◈', label: 'GraphQL' },
          { icon: '💅', label: 'SASS' },
          { icon: '🔵', label: 'Azure DevOps' },
        ],
      },
      {
        title: 'Packaged App Development Associate',
        client: 'Mastercard',
        period: 'Oct 2023 – Feb 2026 · 2 yrs 4 mos',
        badge: 'promoted',
        description:
          'Developed reusable UI components for Mastercard\'s customer-facing portals using Next.js, AEM headless CMS, and GraphQL (AWS AppSync), ensuring high performance across payments and financial workflows.',
        techs: [
          { icon: '▲', label: 'Next.js' },
          { icon: '⚛️', label: 'React.js' },
          { icon: '🔷', label: 'TypeScript' },
          { icon: '🔴', label: 'AEM' },
          { icon: '◈', label: 'GraphQL' },
          { icon: '🌊', label: 'Tailwind CSS' },
          { icon: '🔵', label: 'Azure DevOps' },
        ],
      },
    ],
  },
];
