# Angular Portfolio

A complete developer portfolio built with Angular 19 standalone components, signals, and modern control flow (`@for`, `@if`).

## Project Structure

```
src/
├── app/
│   ├── app.ts                          ← Root component (imports all sections)
│   ├── app.config.ts                   ← App config with provideRouter
│   ├── models/
│   │   └── portfolio.models.ts         ← TypeScript interfaces
│   └── components/
│       ├── navbar/navbar.component.ts  ← Fixed nav, theme toggle, mobile menu
│       ├── hero/hero.component.ts      ← Hero section with signals + animation
│       ├── about/about.component.ts    ← About cards with scroll reveal
│       ├── skills/skills.component.ts  ← Tabbed skills grid with signals
│       ├── projects/projects.component.ts  ← Project switcher with signals
│       ├── experience/experience.component.ts ← Timeline with @for
│       └── contact/contact.component.ts     ← Social links
├── styles.css   ← Global CSS variables (dark/light theme)
├── index.html
└── main.ts
```

## Angular features used

| Feature | Where |
|---|---|
| `signal()` | Skills tab, active project, theme, menu state |
| `@for` + `track` | All lists (skills, projects, tech pills, nav links) |
| `@if` | Tab panel switching, badge visibility |
| `HostListener` | Scroll detection in navbar |
| `AfterViewInit` + `IntersectionObserver` | Scroll-reveal animations |
| `ElementRef` | Native DOM access for observer |
| Standalone components | Every component — no NgModule |
| CSS custom properties | Full dark/light theming via `data-theme` |

## Getting started

```bash
npm install
ng serve
```

## Customise

- **Name / initials**: search `YN` and `Your Name` across all component files
- **Photo**: in `hero.component.ts`, replace the `.avatar-inner` div with `<img src="assets/photo.jpg">`
- **Resume**: change `href="assets/resume.pdf"` in `hero.component.ts`
- **Projects**: add objects to the `projects` signal in `projects.component.ts`
- **Experience**: add objects to the `experiences` signal in `experience.component.ts`
- **Social links**: update `href` values in `contact.component.ts`
- **Accent color**: edit `--accent` in `src/styles.css`

## Deploy to GitHub Pages

```bash
npm install -g angular-cli-ghpages
ng build --base-href "https://yourusername.github.io/portfolio/"
npx angular-cli-ghpages --dir=dist/portfolio/browser
```
