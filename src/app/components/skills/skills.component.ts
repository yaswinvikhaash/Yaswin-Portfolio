import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';
import { Skill } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills">
      <div class="section-label">Technical skills</div>
      <div class="section-title">My toolkit</div>

      <div class="tabs">
        <button class="tab-btn"
                [class.active]="activeTab() === 'skills'"
                (click)="setTab('skills')">Skills</button>
        <button class="tab-btn"
                [class.active]="activeTab() === 'tools'"
                (click)="setTab('tools')">Tools</button>
      </div>

      @if (activeTab() === 'skills') {
        <div class="skills-grid">
          @for (skill of skills(); track skill.name) {
            <div class="skill-card reveal">
              <div class="skill-glow" [style.border-color]="skill.glowColor"></div>
              <div class="skill-icon">{{ skill.icon }}</div>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          }
        </div>
      }

      @if (activeTab() === 'tools') {
        <div class="skills-grid">
          @for (tool of tools(); track tool.name) {
            <div class="skill-card reveal">
              <div class="skill-glow" [style.border-color]="tool.glowColor"></div>
              <div class="skill-icon">{{ tool.icon }}</div>
              <span class="skill-name">{{ tool.name }}</span>
            </div>
          }
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
      font-weight: 700; margin-bottom: 1.5rem; letter-spacing: -0.02em;
    }
    .tabs {
      display: flex; gap: 2rem;
      border-bottom: 1px solid var(--border); margin-bottom: 2rem;
    }
    .tab-btn {
      font-size: 1.1rem; font-weight: 600; padding-bottom: 0.75rem;
      background: none; border: none; color: var(--muted); cursor: pointer;
      position: relative; transition: color 0.2s;
      font-family: 'Syne', sans-serif;
    }
    .tab-btn::after {
      content: ''; position: absolute; bottom: -1px; left: 0;
      width: 0; height: 2px; background: var(--text);
      transition: width 0.3s ease;
    }
    .tab-btn.active { color: var(--text); }
    .tab-btn.active::after { width: 100%; }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 1rem;
    }
    .skill-card {
      background: var(--card); border: 1px solid var(--border);
      border-radius: 12px; padding: 1.25rem 0.75rem;
      display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
      cursor: default; position: relative; overflow: hidden;
      transition: transform 0.25s ease, opacity 0.5s, translate 0.5s;
      opacity: 0; translate: 0 20px;
    }
    .skill-card.visible { opacity: 1; translate: 0 0; }
    .skill-card:hover { transform: translateY(-3px) scale(1.02); }
    .skill-card:hover .skill-glow { opacity: 1; }
    .skill-glow {
      position: absolute; inset: 0; border-radius: 12px;
      border: 2px solid transparent; pointer-events: none;
      opacity: 0; transition: opacity 0.3s;
    }
    .skill-icon { font-size: 2rem; line-height: 1; }
    .skill-name { font-size: 0.75rem; font-weight: 500; text-align: center; }
  `]
})
export class SkillsComponent implements AfterViewInit {
  activeTab = signal<'skills' | 'tools'>('skills');

  skills = signal<Skill[]>([
    { name: 'JavaScript ES6+', icon: '🟨', glowColor: '#f7df1e' },
    { name: 'TypeScript',      icon: '🔷', glowColor: '#3178c6' },
    { name: 'Context API',     icon: '⚛️', glowColor: '#61dafb' },
    { name: 'HTML5',           icon: '🟠', glowColor: '#e34f26' },
    { name: 'CSS',            icon: '🔵', glowColor: '#1572b6' },
    { name: 'REST APIs',       icon: '🔌', glowColor: '#ff6c37' },
    { name: 'SSR & SSG',       icon: '▲',  glowColor: '#ffffff' },
  ]);

  tools = signal<Skill[]>([
    { name: 'Git & GitHub',    icon: '🟠', glowColor: '#f05032' },
    { name: 'Azure DevOps',    icon: '🔵', glowColor: '#0078d7' },
    { name: 'Figma',           icon: '🎨', glowColor: '#f24e1e' },
    { name: 'VS Code',         icon: '🔵', glowColor: '#007ACC' },
    { name: 'Visual Studio',   icon: '🟣', glowColor: '#563d7c' },
    { name: 'Chrome DevTools', icon: '🐛', glowColor: '#4285f4' },
  ]);

  constructor(private el: ElementRef) {}

  setTab(tab: 'skills' | 'tools') {
    this.activeTab.set(tab);
    // Re-observe after tab switch
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
