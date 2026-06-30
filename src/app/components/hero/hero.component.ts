import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero">
      <div class="hero-glow"></div>

      <div class="avatar-wrap fade-up">
        <div class="avatar-ring">

          <div class="avatar-inner">
            <img src="/assets/Image.jpeg" alt="Yaswin Vikhaash" class="avatar-img">
          </div>
          <!-- To use a real photo replace avatar-inner with: -->
        </div>
      </div>

      <h1 class="hero-name fade-up">Hi I'm <span>Yaswin Vikhaash</span></h1>

      <div class="hero-roles fade-up">
        @for (role of roles(); track role; let last = $last) {
          <span>{{ role }}<span *ngIf="!last" class="dot">•</span></span>
        }
      </div>

      <p class="hero-desc fade-up">
        Building scalable and high-performance web applications for enterprises
        using Typescript , Angular, Blazor.
      </p>

      <div class="hero-btns fade-up">
        <a href="#contact" class="btn-primary">
          Contact me
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </section>
  `,
  styles: [`
    section {
      min-height: 100vh; padding-top: 100px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center; position: relative; overflow: hidden;
    }
    .hero-glow {
      position: absolute; width: 600px; height: 600px;
      border-radius: 50%; pointer-events: none;
      background: radial-gradient(circle, rgba(108,140,255,0.12) 0%, transparent 70%);
      top: 50%; left: 50%; transform: translate(-50%,-50%);
    }
    .avatar-ring {
      width: 120px; height: 120px; border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      padding: 2px; margin-bottom: 1.5rem; cursor: default;
      transition: transform 0.3s ease;
    }
    .avatar-ring:hover { transform: scale(1.04) translateY(-3px); }
    .avatar-inner {
      width: 100%; height: 100%; border-radius: 50%;
      background: var(--bg3);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Syne', sans-serif; font-weight: 800;
      font-size: 2rem; color: var(--text);
    }
    .avatar-inner img {
      width: 100%; height: 100%; border-radius: 50%; ;
    }
    .hero-name {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.5rem, 7vw, 5rem);
      font-weight: 800; letter-spacing: -0.03em;
      line-height: 1.05; margin-bottom: 0.75rem;
    }
    .hero-name span { color: var(--accent); }
    .hero-roles {
      display: flex; flex-wrap: wrap; justify-content: center;
      gap: 0.25rem; margin-bottom: 1rem;
      font-size: 0.9rem; color: var(--accent); font-weight: 500;
    }
    .hero-roles span { padding: 0 0.5rem; }
    .dot { margin-left: 0.5rem; }
    .hero-desc {
      max-width: 520px; color: var(--muted); font-size: 1rem;
      line-height: 1.7; margin: 0 auto 2rem;
    }
    .hero-btns {
      display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
    }
    .btn-primary {
      padding: 0.65rem 1.5rem; border-radius: 2rem;
      background: var(--text); color: var(--bg);
      font-weight: 600; font-size: 0.875rem; text-decoration: none;
      border: 1px solid transparent;
      display: inline-flex; align-items: center; gap: 0.4rem;
      transition: all 0.25s ease;
    }
    .btn-primary:hover {
      background: transparent; color: var(--text);
      border-color: var(--text); transform: scale(1.04);
    }
    .btn-outline {
      padding: 0.65rem 1.5rem; border-radius: 2rem;
      background: transparent; color: var(--text);
      font-weight: 600; font-size: 0.875rem; text-decoration: none;
      border: 1px solid var(--border-hover);
      display: inline-flex; align-items: center; gap: 0.4rem;
      transition: all 0.25s ease;
    }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: scale(1.04); }
    .fade-up { opacity: 0; transform: translateY(28px); animation: fadeUp 0.7s ease forwards; }
    .fade-up:nth-child(1) { animation-delay: 0.1s; }
    .fade-up:nth-child(2) { animation-delay: 0.2s; }
    .fade-up:nth-child(3) { animation-delay: 0.3s; }
    .fade-up:nth-child(4) { animation-delay: 0.4s; }
    .fade-up:nth-child(5) { animation-delay: 0.5s; }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  `]
})
export class HeroComponent {
  roles = signal(['Frontend Engineer', 'Angular Developer', 'Typescript Specialist']);

}
