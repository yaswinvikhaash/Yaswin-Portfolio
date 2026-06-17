import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(true);

  constructor() {
    effect(() => {
      document.documentElement.setAttribute(
        'data-theme',
        this.isDark() ? 'dark' : 'light'
      );
    });
  }

  toggle(): void {
    this.isDark.update(v => !v);
  }
}
