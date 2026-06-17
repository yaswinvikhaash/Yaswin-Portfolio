import { Component, signal } from '@angular/core';
import { Social } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact">
      <div class="section-label">Get in touch</div>
      <div class="section-title">Lets work together</div>
      <p>
        I am always open for collaboration and interested in working in a challenging
        environment where my skills can be used to the fullest.
      </p>
      <div class="social-row">
        @for (social of socials(); track social.label) {
          <a [href]="social.href" target="_blank" rel="noopener noreferrer"
             [attr.aria-label]="social.label"
             class="social-btn" [style.background]="social.bg">
            <svg viewBox="0 0 24 24" width="18" height="18" [attr.fill]="social.svgColor">
              <path [attr.d]="social.svgPath"/>
            </svg>
          </a>
        }
      </div>
    </section>
  `,
  styles: [
    "section { padding: clamp(4rem,10vh,6rem) clamp(1.5rem,5vw,4rem); background: var(--bg2); text-align: center; display: flex; flex-direction: column; align-items: center; }",
    ".section-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem; }",
    ".section-title { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; margin-bottom: 1rem; letter-spacing: -0.02em; }",
    "p { color: var(--muted); max-width: 500px; margin: 0 auto 2rem; font-size: 0.95rem; line-height: 1.7; }",
    ".social-row { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }",
    ".social-btn { width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.25s ease; }",
    ".social-btn:hover { transform: scale(1.1); border-color: var(--accent); }"
  ]
})
export class ContactComponent {
  socials = signal<Social[]>([
    {
      label: 'LinkedIn', href: 'https://www.linkedin.com/in/yaswin-vikhaash-71bbb7184/', bg: '#374151', svgColor: '#0a66c2',
      svgPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      label: 'Email', href: 'https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSKhbqXjhFWDkLWhjvVmmhMQkLfGjKngXQSZWLzlJJVNnbwBvHlNbcRwgQPDDLSMxKtQMJnJ', bg: '#374151', svgColor: '#ea4335',
      svgPath: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'
    }
  ]);
}
