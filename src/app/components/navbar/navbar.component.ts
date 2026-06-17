import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="nav-logo">YN</div>

      <div class="nav-links">
        @for (link of navLinks; track link.href) {
          <a [href]="link.href">{{ link.label }}</a>
        }
      </div>

      <button class="theme-btn" (click)="toggleTheme()" [attr.aria-label]="'Toggle theme'">
        {{ isDark() ? '☀️' : '🌙' }}
      </button>

      <button class="hamburger" (click)="toggleMenu()" aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </nav>

    <div class="mobile-menu" [class.open]="menuOpen()">
      @for (link of navLinks; track link.href) {
        <a [href]="link.href" (click)="closeMenu()">{{ link.label }}</a>
      }
    </div>
  `,
  styles: [`
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      height: 64px; display: flex; align-items: center;
      padding: 0 clamp(1.5rem, 5vw, 4rem);
      backdrop-filter: blur(18px);
      background: rgba(10,10,15,0.7);
      border-bottom: 1px solid var(--border);
      transition: background 0.3s;
    }
    :host-context([data-theme="light"]) nav {
      background: rgba(245,245,248,0.85);
    }
    .nav-logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800; font-size: 1.6rem;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }
    .nav-links {
      margin-left: auto; display: flex; align-items: center; gap: 2rem;
    }
    .nav-links a {
      font-size: 0.875rem; color: var(--muted); text-decoration: none;
      transition: color 0.2s; font-weight: 500;
      position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -3px; left: 0;
      width: 0; height: 1.5px; background: var(--accent);
      transition: width 0.25s ease;
    }
    .nav-links a:hover { color: var(--text); }
    .nav-links a:hover::after { width: 100%; }
    .theme-btn {
      margin-left: 1.5rem; width: 36px; height: 36px; border-radius: 50%;
      border: 1px solid var(--border); background: var(--bg3);
      color: var(--muted); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s; font-size: 16px;
    }
    .theme-btn:hover { border-color: var(--accent); transform: scale(1.1); }
    .hamburger {
      display: none; background: none; border: none;
      cursor: pointer; color: var(--text); padding: 4px; margin-left: 1rem;
    }
    .mobile-menu {
      display: none; position: fixed; top: 64px; left: 0; right: 0;
      background: var(--bg2); border-bottom: 1px solid var(--border);
      padding: 1rem 2rem 1.5rem; flex-direction: column; gap: 1rem; z-index: 99;
    }
    .mobile-menu.open { display: flex; }
    .mobile-menu a {
      color: var(--text); text-decoration: none; font-weight: 500;
      padding: 0.5rem 0; border-bottom: 1px solid var(--border);
    }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hamburger { display: flex; }
    }
  `]
})
export class NavbarComponent {
  isDark = signal(true);
  menuOpen = signal(false);
  isScrolled = signal(false);

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleTheme() {
    const next = this.isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    this.isDark.set(!this.isDark());
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
