import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slidingimaes',
  imports: [],
  templateUrl: './slidingimaes.html',
  styleUrl: './slidingimaes.css'
})
export class Slidingimaes  implements OnInit  {

 currentImage = 1;
  totalImages = 4;
  autoRotateInterval: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startAutoRotate();
    document.addEventListener('keydown', (event) => this.handleKey(event));
  }

  changeImage(targetId: number) {
    const images = this.el.nativeElement.querySelectorAll('.hero-image');
    const icons = this.el.nativeElement.querySelectorAll('.control-icon');
    const indicator = this.el.nativeElement.querySelector('#animation-indicator');
    const progress = this.el.nativeElement.querySelector('#animation-progress');

    this.renderer.setStyle(indicator, 'display', 'block');
    this.renderer.setStyle(progress, 'width', '0%');

    void indicator.offsetWidth; // force reflow
    this.renderer.setStyle(progress, 'width', '100%');

    setTimeout(() => {
      images.forEach((img: HTMLElement) => {
        const id = parseInt(img.getAttribute('data-id') || '0');
        if (id === targetId) {
          this.renderer.addClass(img, 'active');
          this.currentImage = targetId;
        } else {
          this.renderer.removeClass(img, 'active');
        }
      });

      icons.forEach((icon: HTMLElement) => {
        const target = parseInt(icon.getAttribute('data-target') || '0');
        if (target === targetId) {
          this.renderer.addClass(icon, 'active');
        } else {
          this.renderer.removeClass(icon, 'active');
        }
      });

      setTimeout(() => {
        this.renderer.setStyle(indicator, 'display', 'none');
      }, 100);
    }, 2000);
  }

  nextImage() {
    const next = this.currentImage < this.totalImages ? this.currentImage + 1 : 1;
    this.changeImage(next);
    this.resetAutoRotate();
  }

  prevImage() {
    const prev = this.currentImage > 1 ? this.currentImage - 1 : this.totalImages;
    this.changeImage(prev);
    this.resetAutoRotate();
  }

  handleKey(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      this.prevImage();
    }
  }

  startAutoRotate() {
    this.autoRotateInterval = setInterval(() => this.nextImage(), 7000);
  }

  resetAutoRotate() {
    clearInterval(this.autoRotateInterval);
    this.startAutoRotate();
  }
}