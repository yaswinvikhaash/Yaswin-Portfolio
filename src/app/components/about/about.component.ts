import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';

interface Card {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  hoverColor: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about">
      <div class="section-label">About me</div>
      <div class="section-title">What I bring to the table</div>
      <div class="about-grid">
        @for (card of cards(); track card.title; let i = $index) {
          <div class="about-card reveal"
               [style.--hover-color]="card.hoverColor">
            <div class="about-icon" [style.background]="card.iconBg">
              {{ card.icon }}
            </div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
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
      font-weight: 700; margin-bottom: 2rem;
      letter-spacing: -0.02em; line-height: 1.15;
    }
    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.25rem;
    }
    .about-card {
      background: var(--card); border: 1px solid var(--border);
      border-radius: 16px; padding: 2rem 1.5rem;
      display: flex; flex-direction: column; align-items: center;
      text-align: center; gap: 1rem; cursor: default;
      transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s, opacity 0.5s, translate 0.5s;
      opacity: 0; translate: 0 20px;
    }
    .about-card.visible {
      opacity: 1; translate: 0 0;
    }
    .about-card:hover {
      border-color: var(--hover-color);
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.25);
    }
    .about-icon {
      width: 60px; height: 60px; border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem;
    }
    h3 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; }
    p { color: var(--muted); font-size: 0.9rem; line-height: 1.7; }
  `]
})
export class AboutComponent implements AfterViewInit {
  cards = signal<Card[]>([
    {
      icon: '🏗️',
      iconBg: 'rgba(108,140,255,0.1)',
      hoverColor: '#6c8cff',
      title: 'Scalable UI Component Systems',
      description: 'Architecting and engineering high-performance, reusable UI components within large-scale enterprise ecosystems. Delivering complex editor primitives — inline toolbars, contextual table selection, and precision line-height controls — integrated seamlessly into Syncfusions industry-adopted component suite.'
    },
    {
      icon: '⚡',
      iconBg: 'rgba(167,139,250,0.1)',
      hoverColor: '#a78bfa',
      title: ' Performance Optimization & Diagnostic Engineering',
      description: 'Precision Debugging & Runtime Efficiency Systematically profiling, diagnosing, and resolving deeply nested rendering bottlenecks and theme-layer inconsistencies across multi-product environments. Driving measurable improvements in component reliability and cross-browser rendering fidelity through rigorous root-cause analysis.'
    },
    {
      icon: '🚀',
      iconBg: 'rgba(129,140,248,0.1)',
      hoverColor: '#818cf8',
      title: ' Collaborative Feature Ownership',
      description: 'End-to-End Delivery in Agile Ecosystems Orchestrating feature lifecycles from conceptual UX alignment through production deployment — interfacing with cross-functional stakeholders to translate design intent into robust, accessible, and performant front-end implementations across TypeScript and Angular-driven architectures.'
    }
  ]);

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => observer.observe(el));
  }
}
