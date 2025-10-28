import { Component, OnInit } from '@angular/core';
import { Tourism } from '../../services/tourism';
import { productResponsedata, tourismproduct } from '../../Interface/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-all-products',
  imports: [CommonModule,RouterLink],
  templateUrl: './get-all-products.html',
  styleUrl: './get-all-products.css',
})
export class GetAllProducts implements OnInit {
  orders: productResponsedata[] = [];

  constructor(private service: Tourism) {}

  ngOnInit(): void {
    this.allProducts();
  }

  allProducts() {
    this.service.allproducts().subscribe((res: tourismproduct) => {
      this.orders = res.tourism.Product;
    });
  }
}
