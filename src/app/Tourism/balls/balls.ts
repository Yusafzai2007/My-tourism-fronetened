import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-balls',
  imports: [CommonModule],
  templateUrl: './balls.html',
  styleUrl: './balls.css'
})
export class Balls implements AfterViewInit {

 stats = [
    {
      value: 12,
      label: 'Years Experience',
      suffix: '',
      compact: 'false',
      duration: 1400,
      dotPosition: 'bottom',
    },
    {
      value: 97,
      label: 'Retention Rate',
      suffix: '%',
      compact: 'false',
      duration: 1400,
      dotPosition: 'top',
    },
    {
      value: 8000,
      label: 'Tour Completed',
      suffix: '',
      compact: 'true',
      duration: 1400,
      dotPosition: 'bottom',
    },
    {
      value: 19000,
      label: 'Happy Travellers',
      suffix: '',
      compact: 'true',
      duration: 1400,
      dotPosition: 'top',
    },
  ];

  ngAfterViewInit(): void {
    this.initLucideIcons();
    this.animateCounters();
  }

  private initLucideIcons() {
    // Load lucide icons globally
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest';
    script.onload = () => {
      // @ts-ignore
      if (window.lucide && lucide.createIcons) lucide.createIcons();
    };
    document.body.appendChild(script);
  }

  private animateCounters() {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const formatValue = (value: number, el: HTMLElement) => {
      const suffix = el.dataset['suffix'] || '';
      const compact = el.dataset['compact'] === 'true';
      if (compact && value >= 1000) {
        return `${Math.round(value / 1000)}K`;
      }
      return `${Math.round(value)}${suffix}`;
    };

    const animateCounter = (el: HTMLElement) => {
      const target = Number(el.dataset['target'] || '0');
      const duration = Number(el.dataset['duration'] || '1200');
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = prefersReduced ? 1 : easeOutCubic(t);
        const current = target * eased;
        el.textContent = formatValue(current, el);
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const counters = document.querySelectorAll<HTMLElement>('.counter');
    counters.forEach((el) => animateCounter(el));
  }
}