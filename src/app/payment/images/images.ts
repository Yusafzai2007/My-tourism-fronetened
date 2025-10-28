import { Component, OnInit } from '@angular/core';
import { Tourism } from '../../services/tourism';
import { TourismResponsePayment, UserTourism } from '../../Interface/payment';
import { CommonModule } from '@angular/common';
import { PaymentForm } from '../payment-form/payment-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-images',
  imports: [CommonModule, PaymentForm,FormsModule],
  templateUrl: './images.html',
  styleUrl: './images.css',
})
export class Images implements OnInit {
  constructor(private service: Tourism) {}

  dep: UserTourism[] = [];

  ngOnInit(): void {
    this.bookingdta();
  }

  bookingdta() {
    this.service.bookingfetch().subscribe((res: TourismResponsePayment) => {
      this.dep = res.tourism.user;
      console.log(this.dep);
    });
  }

  deletebooking(bookingId: string, cartItemId: string) {
    this.service.deletebooking(bookingId, cartItemId).subscribe({
      next: (res) => {
        console.log(res);

        alert('delete successfully');
        this.bookingdta(); // refresh data after deletion
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //////////////////////////////  delete-model ////////////////////////////////

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmDelete() {
    console.log('Product deleted!');
    this.closeModal();
  }
}
