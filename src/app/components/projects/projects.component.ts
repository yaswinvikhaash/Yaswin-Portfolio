import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects">
      <div class="section-label">Work</div>
      <div class="section-title">Selected projects</div>

      <div class="projects-layout">
        <!-- Tab sidebar -->
        <div class="project-tabs-list">
          @for (project of projects(); track project.id) {
            <button class="project-tab-btn"
                    [class.active]="activeProject() === project.id"
                    (click)="setProject(project.id)">
              <div class="project-logo"
                   [style.background]="project.logoBg">
                {{ project.logoText }}
              </div>
              <div class="project-tab-info">
                <span class="name">{{ project.company }}</span>
                <span class="desc">{{ project.role }}</span>
              </div>
            </button>
          }
        </div>

        <!-- Active project detail -->
        @for (project of projects(); track project.id) {
          @if (activeProject() === project.id) {
            <div class="project-card reveal">
              <h3>{{ project.company }}</h3>
              <p class="sub">{{ project.role }}</p>
              <p class="date">{{ project.period }} · {{ project.location }}</p>

              <div class="tags">
                @for (tag of project.tags; track tag) {
                  <span class="tag">{{ tag }}</span>
                }
              </div>

              <p class="project-desc">{{ project.description }}</p>

              <div class="contributions">
                <h4>Key Contributions</h4>
                <ul>
                  @for (item of project.contributions; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>

              <div class="stack">
                <h4>Tech Stack</h4>
                <div class="stack-chips">
                  @for (tech of project.stack; track tech.label) {
                    <span class="chip">{{ tech.icon }} {{ tech.label }}</span>
                  }
                </div>
              </div>

              <div class="impact">
                @for (imp of project.impact; track imp.label) {
                  <div class="impact-badge">
                    <strong>{{ imp.label }}:</strong> {{ imp.value }}
                  </div>
                }
              </div>
            </div>
          }
        }
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: clamp(4rem,10vh,6rem) clamp(1.5rem,5vw,4rem);
      background: var(--bg2);
    }
    .section-label {
      font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem;
    }
    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700; margin-bottom: 2rem; letter-spacing: -0.02em;
    }
    .projects-layout {
      display: grid; grid-template-columns: 280px 1fr; gap: 2rem;
    }
    .project-tabs-list {
      display: flex; flex-direction: column; gap: 0.75rem;
      position: sticky; top: 80px; align-self: start;
    }
    .project-tab-btn {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.875rem 1rem; border-radius: 12px;
      border: 1px solid var(--border); background: var(--card);
      cursor: pointer; text-align: left; color: var(--text);
      transition: all 0.25s ease; font-family: inherit;
      position: relative;
    }
    .project-tab-btn::after {
      content: ''; position: absolute; right: -8px; top: 50%; translate: 0 -50%;
      width: 0; height: 0;
      border-top: 8px solid transparent; border-bottom: 8px solid transparent;
      border-left: 8px solid #3b5bdb;
      opacity: 0; transition: opacity 0.2s;
    }
    .project-tab-btn:hover { background: var(--bg3); }
    .project-tab-btn.active {
      background: #3b5bdb; border-color: transparent;
      color: #fff; box-shadow: 0 4px 20px rgba(59,91,219,0.35);
    }
    .project-tab-btn.active::after { opacity: 1; }
    .project-logo {
      width: 40px; height: 28px; border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.65rem; font-weight: 800; color: #fff;
      flex-shrink: 0; letter-spacing: -0.02em;
    }
    .project-tab-info { flex: 1; }
    .project-tab-info .name { font-weight: 600; font-size: 0.875rem; display: block; }
    .project-tab-info .desc { font-size: 0.75rem; opacity: 0.65; display: block; margin-top: 2px; }
    .project-card {
      background: var(--card); border: 1px solid var(--border);
      border-radius: 16px; padding: 2rem;
      opacity: 0; translate: 0 20px;
      transition: opacity 0.5s, translate 0.5s;
    }
    .project-card.visible { opacity: 1; translate: 0 0; }
    .project-card h3 { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 700; }
    .sub { color: var(--muted); font-size: 0.875rem; margin-top: 2px; }
    .date { font-size: 0.8rem; color: var(--muted); margin-top: 4px; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; }
    .tag {
      font-size: 0.72rem; padding: 4px 10px; border-radius: 999px;
      background: var(--bg3); border: 1px solid var(--border); color: var(--muted);
    }
    .project-desc { color: var(--text); font-size: 0.9rem; line-height: 1.7; margin-bottom: 1.25rem; }
    .contributions h4, .stack h4 { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.6rem; }
    .contributions ul { list-style: none; display: flex; flex-direction: column; gap: 0.4rem; }
    .contributions ul li {
      font-size: 0.875rem; color: var(--muted);
      padding-left: 1.2rem; position: relative;
    }
    .contributions ul li::before {
      content: '›'; position: absolute; left: 0; color: var(--accent); font-weight: 700;
    }
    .stack { margin-top: 1.25rem; }
    .stack-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .chip {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 5px 10px; border-radius: 8px;
      background: var(--bg3); border: 1px solid var(--border);
      font-size: 0.78rem; color: var(--text); transition: transform 0.2s;
    }
    .chip:hover { transform: translateY(-2px); }
    .impact { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.25rem; }
    .impact-badge {
      font-size: 0.78rem; padding: 5px 12px; border-radius: 8px;
      background: var(--bg3); border: 1px solid var(--border);
    }
    .impact-badge strong { color: var(--accent); }
    @media (max-width: 768px) {
      .projects-layout { grid-template-columns: 1fr; }
      .project-tabs-list { flex-direction: row; overflow-x: auto; position: static; }
      .project-tab-info .desc { display: none; }
      .project-tab-btn::after { display: none; }
    }
  `]
})
export class ProjectsComponent implements AfterViewInit {
  activeProject = signal('proj-mc');

  projects = signal<Project[]>([
    {
      id: 'proj-mc',
      company: 'Rich Text Editor',
      role: 'Text Editing Component',
      period: 'Dec 2023 – Jun 2025',
      location: 'Chennai, India',
      logoText: '',
      logoBg: '',
      tags: ['Content Creation', 'WYSIWYG', 'Text Editing', 'Extensible UI'],
      description: 'Built reusable, high-performance frontend components for Mastercard portals ensuring scalability, security, and compliance across multiple customer-facing workflows.',
      contributions: [
        'Developed inline toolbar feature for better editing usability',
        'Implemented table selection functionality in collaboration with UX team',
        'Improved line height feature for better content formatting',
        'Fixed theme-related inconsistencies across components',
        'Implemnted multiple Audio and Video Paste Feature',
        'Collaborated with product owners and Production to align UI logic with compliance requirements',
      ],
      stack: [
        { label: 'Angular', icon: '🅰️' },
        { label: 'TypeScript', icon: '🔷' },
        { label: 'HTML', icon: '🌐' },
        { label: 'SCSS', icon: '🎨' },
        { label: 'Blazor', icon: '🟣' },
      ],
      impact: [
        { label: 'Component Reusability', value: 'High' },
        { label: 'Performance', value: 'Optimised for fast rendering' },
        { label: 'Scale', value: 'Large-scale content management systems' },
      ]
    },
    {
      id: 'proj-hmh',
      company: 'Kanban',
      role: 'Visual Workflow Dashboard',
      period: 'Mar 2026 – Present',
      location: 'Remote',
      logoText: '',
      logoBg: '',
      tags: ['Task Management', 'Drag & Drop', 'Swim-lane Architecture', 'Real-time State Sync'],
      description: 'Building a scalable Next.js + Sitecore JSS frontend for a major healthcare system, delivering accessible and SEO-optimised patient-facing experiences.',
      contributions: [
        'Implemented drag-and-drop functionality for improved task management',
        'Resolved customer issues and bugs with high accuracy',
        'Fixed UI and theme-related issues to ensure consistent design',
        'wrting B unit test case and Jasmine test case to ensure the porpe rfunctionality of the kanban compoennt',
      ],
      stack: [
        { label: 'Angular', icon: '🅰️' },
        { label: 'TypeScript', icon: '🔷' },
        { label: 'HTML', icon: '🌐' },
        { label: 'SCSS', icon: '🎨' },
        { label: 'Blazor', icon: '🟣' },
      ],
      impact: [
      { label: 'Rendering', value: '10,000+ cards virtualized' },
      { label: 'Drag Latency', value: '<16ms drop response' },
      { label: 'Scale', value: 'Enterprise Kanban pipelines' },
      ]
    }
  ]);

  constructor(private el: ElementRef) {}

  setProject(id: string) {
    this.activeProject.set(id);
    setTimeout(() => this.observe(), 50);
  }

  ngAfterViewInit() { this.observe(); }

  observe() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.05 });
    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el));
  }
}
