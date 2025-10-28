import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../admin-services/admin';
import { Order, TourismApiResponse } from '../../Interface/order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './order-details.html',
  styleUrls: ['./order-details.css'],
})
export class OrderDetails implements OnInit {
  orderesDetails: Order[] = [];
  selectedOrder: Order | null = null;
  model: boolean = false;

  constructor(private active: ActivatedRoute, private service: Admin) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    let productId = this.active.snapshot.paramMap.get('id');
    if (productId) {
      this.service.order_details(productId).subscribe((res: TourismApiResponse) => {
        this.orderesDetails = res.tourism.orders;
      });
    }
  }

  tableHeaders: string[] = [
    'User',
    'Title',
    'Transfer',
    'Kids',
    'Adults',
    'City',
    'Order Date',
    'Time',
    'Category',
    'Total',
    'Payment',
    'Edit',
    'Delete'
  ];

  showmdle(order: Order) {
    this.selectedOrder = order;
    this.model = true;
  }

  closeModalpayment() {
    this.model = false;
    this.selectedOrder = null;
  }

  deletedata(orderId: string) {
    if (confirm('Are you sure you want to delete this payment?')) {
      this.service.deletepaymentdata(orderId).subscribe({
        next: (res) => {
          console.log('Deleted Successfully:', res);
          this.getAllOrders(); // refresh orders list
        },
        error: (err) => {
          console.error('Error deleting:', err);
        },
      });
    }
  }



showModal = false;
selectedEditOrder: Order | null = null;

openModal(order: Order) {
  this.selectedEditOrder = { ...order }; // clone to edit safely
  this.showModal = true;
}

closeModal() {
  this.showModal = false;
  this.selectedEditOrder = null;
}

updateOrder() {
  if (this.selectedEditOrder) {
    console.log('Updated Order:', this.selectedEditOrder);

    // 🧠 Example: Call API to update the order
    this.service.editpayment(this.selectedEditOrder._id, this.selectedEditOrder).subscribe({
      next: (res) => {
        console.log('Order updated successfully:', res);
        this.getAllOrders(); // refresh list
        this.closeModal();
      },
      error: (err) => console.error('Error updating order:', err),
    });
  }
}



















}
