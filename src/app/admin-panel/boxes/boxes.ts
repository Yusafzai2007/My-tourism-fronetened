import { Component, OnInit } from '@angular/core';
import { Tourism } from '../../services/tourism';
import { CommonModule } from '@angular/common';
import { TourismResponsePayment } from '../../Interface/payment';
import { Order } from '../../Interface/orders';
import { TourismApiResponse } from '../../Interface/order';

@Component({
  selector: 'app-boxes',
  imports: [CommonModule],
  templateUrl: './boxes.html',
  styleUrls: ['./boxes.css'], // corrected from styleUrl
})
export class Boxes implements OnInit {
  constructor(private service: Tourism) {}

  dep: number = 0;
  cities: number = 0;
  users: number = 0;
  totalOrders: number = 0;
  totalpricedata: number = 0;

  cards: any[] = [
    {
      title: 'Total Products',
      value: () => this.dep,
      icon: 'fa-box-open',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-600',
      rotate: 'rotate-12',
    },
    {
      title: 'Total Cities',
      value: () => this.cities,
      icon: 'fa-city',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-teal-600',
      rotate: '-rotate-12',
    },
    {
      title: 'Total Users',
      value: () => this.users,
      icon: 'fa-users',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-fuchsia-600',
      rotate: 'rotate-12',
    },
    {
      title: 'Total Orders',
      value: () => this.totalOrders,
      icon: 'fa-shopping-cart',
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-pink-600',
      rotate: '-rotate-12',
    },
    {
      title: 'Total Payment',
      value: () => this.totalpricedata,
      icon: 'fa-money-bill-1-wave',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-600',
      rotate: 'rotate-12',
    },
  ];

  ngOnInit() {
    this.ftechproducts();
    this.citydata();
    this.userdata();
    this.orderdata();
    this.totalprice();
  }

  ftechproducts() {
    this.service.allProducts().subscribe((res: any) => {
      this.dep = res.tourism.Product.length;
    });
  }

  citydata() {
    this.service.cities().subscribe((res: any) => {
      this.cities = res.tourism.length;
    });
  }

  userdata() {
    this.service.allProducts().subscribe((res: any) => {
      this.users = res.tourism.users.length;
    });
  }

  orderdata() {
    this.service.getAllOrders().subscribe({
      next: (res: TourismApiResponse) => {
        this.totalOrders = res.tourism.orders.length;
      },
      error: (err) => console.error(err),
    });
  }

  totalprice() {
    this.service.getAllOrders().subscribe({
      next: (res: TourismApiResponse) => {
        const totaldata = res.tourism.orders || [];
        this.totalpricedata = totaldata.reduce((acc, data) => acc + data.total, 0);
      },
    });
  }

  // filtertext = '';

  // filterdata() {
  //   this.totalOrders = this.filtertext.trim().toLowerCase();
  // }

  Year: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
