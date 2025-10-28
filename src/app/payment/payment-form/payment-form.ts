import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tourism } from '../../services/tourism';

@Component({
  selector: 'app-payment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-form.html',
  styleUrl: './payment-form.css',
})
export class PaymentForm {
  constructor(private payment: Tourism) {}

  paymentMethods = ['Visa', 'Mastercard', 'American Express', 'Discover'];
  countries = [
    'Afghanistan',
    'Algeria',
    'Angola',
    'Argentina',
    'Armenia',
    'Azerbaijan',
    'Bahrain',
    'Brazil',
    'Yemen',
    'Zimbabwe',
  ];

  paymentdata = {
    first_name: '',
    last_name: '',
    address: '',
    payment_Method: '',
    city: '',
    state: '',
    country: '',
    name_On_Card: '',
    card_Number: '',
    zip: '',
    expiry: '',
    cvv: '',
  };

  submit() {
    console.log(this.paymentdata);
    this.payment.payment(this.paymentdata).subscribe({
      next: (res) => {
        console.log(res);
        alert('Payment Successful');
      },
      error: (err) => {
        console.log(err);
        alert('Payment Failed');
      },
    });
  }
}
