import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

email: string = '';

  // Newsletter submission
  onSubmit() {
    if (this.email.trim()) {
      alert('Subscribed successfully!');
      this.email = '';
    }
  }

  // Scroll to top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}