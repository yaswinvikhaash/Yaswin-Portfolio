import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-experience />
      <app-contact />
    </main>
    <footer>
      <p>Designed &amp; built by <strong>Yaswin Vikhaash</strong> · 2026</p>
    </footer>
  `,
  styles: [`
    :host { display: block; }
    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.8rem;
      color: var(--muted);
      border-top: 1px solid var(--border);
    }
  `]
})
export class App {}
