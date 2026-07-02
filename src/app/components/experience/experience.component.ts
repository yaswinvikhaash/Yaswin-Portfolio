import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';
import { Experience } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience">
      <div class="section-label">Career</div>
      <div class="section-title">Work experience</div>

      @for (exp of experiences(); track exp.company) {
        <div class="exp-card reveal">
          <div class="exp-header">
            <div class="exp-logo" [style.background]="exp.companyBg">
              {{ exp.companyShort }}
            </div>
            <div>
              <div class="exp-company">{{ exp.company }}</div>
              <div class="exp-meta">{{ exp.period }} · {{ exp.location }}</div>
            </div>
          </div>

          <div class="timeline">
            @for (role of exp.roles; track role.title) {
              <div class="timeline-item">
                <div class="timeline-dot" [class.current]="role.isCurrent"></div>
                <div class="role-header">
                  <span class="role-title">{{ role.title }}</span>
                  @if (role.isCurrent) {
                    <span class="badge badge-current">Current</span>
                  }
                  @if (role.isPromoted) {
                    <span class="badge badge-promoted">↑ Promoted</span>
                  }
                </div>
                <div class="role-client">{{ role.client }}</div>
                <div class="role-period">{{ role.period }}</div>
                <p class="role-desc">{{ role.description }}</p>
                <div class="tech-pills">
                  @for (pill of role.techPills; track pill) {
                    <span class="tech-pill">{{ pill }}</span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      }
    </section>
  `,
  styles: [`
    section {
      padding: clamp(4rem,10vh,6rem) clamp(1.5rem,5vw,4rem);
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
    .exp-card {
      background: var(--card); border: 1px solid var(--border);
      border-radius: 16px; padding: 1.75rem; margin-bottom: 1.5rem;
      transition: border-color 0.3s, opacity 0.5s, translate 0.5s;
      opacity: 0; translate: 0 20px;
    }
    .exp-card.visible { opacity: 1; translate: 0 0; }
    .exp-card:hover { border-color: var(--border-hover); }
    .exp-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
    .exp-logo {
      width: 44px; height: 44px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.9rem;
      color: #fff; flex-shrink: 0;
    }
    .exp-company { font-weight: 700; font-size: 1rem; }
    .exp-meta { font-size: 0.78rem; color: var(--muted); margin-top: 2px; }
    .timeline {
      border-left: 2px solid var(--border); padding-left: 1.25rem;
      display: flex; flex-direction: column; gap: 1.5rem;
    }
    .timeline-item { position: relative; }
    .timeline-dot {
      position: absolute; left: -1.6rem; top: 4px;
      width: 12px; height: 12px; border-radius: 50%;
      border: 2px solid var(--border); background: var(--bg);
      transition: background 0.3s;
    }
    .timeline-dot.current { background: var(--accent); border-color: var(--accent); }
    .role-header { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-bottom: 4px; }
    .role-title { font-weight: 600; font-size: 0.9rem; }
    .badge {
      font-size: 0.7rem; font-weight: 600; padding: 2px 10px; border-radius: 999px;
    }
    .badge-current { background: rgba(52,211,153,0.12); color: #34d399; }
    .badge-promoted { background: rgba(108,140,255,0.12); color: var(--accent); }
    .role-client { font-size: 0.8rem; font-weight: 600; color: var(--accent); }
    .role-period { font-size: 0.75rem; color: var(--muted); margin-bottom: 0.6rem; }
    .role-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.65; margin-bottom: 0.75rem; }
    .tech-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tech-pill {
      font-size: 0.7rem; padding: 3px 8px; border-radius: 6px;
      background: rgba(108,140,255,0.06); border: 1px solid var(--border);
      color: var(--muted); transition: background 0.2s;
    }
    .tech-pill:hover { background: rgba(108,140,255,0.12); color: var(--text); }
  `]
})
export class ExperienceComponent implements AfterViewInit {
  experiences = signal<Experience[]>([
    {
      company: 'Syncfusion',
      companyShort: 'Sy',
      companyBg: 'linear-gradient(135deg, #6c8cff, #a78bfa)',
      period: 'Sept 2023 – Present',
      location: 'Chennai, India',
      roles: [
        {
          title: 'Software Engineer level 2',
          client: 'Kanban',
          period: 'Mar 2025 – Present',
          isCurrent: true,
          isPromoted: false,
          description: 'Architected seamless drag-and-drop task management capabilities within a feature-rich Kanban board, implementing precise DOM state management for low-latency interactions. Eliminated cross-component rendering anomalies and theme discrepancies to ensure pixel-perfect consistency across diverse client deployments.',
          techPills: [ 'TypeScript', 'Angular', 'SCSS', 'Blazor', 'HTML'],
        },
        {
          title: 'Software Engineer level 1',
          client: ' Rich Text Editor',
          period: 'Oct 2023 – Feb 2025 · 1 yrs 4 mos',
          isCurrent: false,
          isPromoted: true,
          description: 'Worked on multiple features and implemented various features and then fixed bugs and UI issues too',
          techPills: [ 'TypeScript', 'Angular', 'SCSS', 'Blazor', 'HTML'],
        }
      ]
    }
  ]);

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el));
  }
}
