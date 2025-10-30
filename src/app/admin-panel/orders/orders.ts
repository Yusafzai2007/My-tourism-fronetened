import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin-services/admin';
import { Order, TourismApiResponse } from '../../Interface/order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  orderdataarry: Order[] = [];
  uniqueUsers: Order[] = [];

  constructor(private service: Admin) {}

  
  ngOnInit(): void {
    this.ordersdata();
  }

  ordersdata() {
    this.service.orders().subscribe({
      next: (res: TourismApiResponse) => {
        this.orderdataarry = res.tourism?.orders || [];

        // ✅ Remove duplicate emails
        const seenEmails = new Set();
        this.uniqueUsers = this.orderdataarry.filter((item) => {
          const email = item.userId?.email;
          if (!email || seenEmails.has(email)) {
            return false;
          }
          seenEmails.add(email);
          return true;
        });

        console.log('Unique Users:', this.uniqueUsers);
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      },
    });
  }

  // ✅ Calculate total for a user
  getUserTotal(userId: string | undefined): number {
    if (!userId) return 0;
    return this.orderdataarry
      .filter((order) => order.userId?.email === userId)
      .reduce((sum, order) => sum + (order.total || 0), 0);
  }
}
