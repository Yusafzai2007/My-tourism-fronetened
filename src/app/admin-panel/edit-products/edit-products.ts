import { Component, OnInit } from '@angular/core';
import { Tourism } from '../../services/tourism';
import { ActivatedRoute } from '@angular/router';
import { tourismproduct } from '../../Interface/products';
import { productResponse } from '../../Interface/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Admin } from '../admin-services/admin';

@Component({
  selector: 'app-edit-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-products.html',
  styleUrls: ['./edit-products.css']
})
export class EditProducts implements OnInit {
  adminproducts: productResponse[] = [];
  productId!: string;

  constructor(
    private service: Tourism,
    private active: ActivatedRoute,
    private adminservice: Admin
  ) {}

  ngOnInit(): void {
    this.productId = this.active.snapshot.paramMap.get('id')!;
    console.log('Product ID:', this.productId);

    if (this.productId) {
      this.service.singleProduct(this.productId).subscribe((res: tourismproduct) => {
        console.log('Single Product Response:', res.tourism.Product);

        // ✅ Ensure data is always an array
        this.adminproducts = Array.isArray(res.tourism.Product)
          ? res.tourism.Product
          : [res.tourism.Product];

        console.log('Admin Products:', this.adminproducts);
      });
    }
  }

  // ✅ Updated PUT Request Function
  update_productdata(id: string, updatedata: any) {
    this.adminservice.update_product(id, updatedata).subscribe({
      next: (res) => {
        console.log('Product updated successfully:', res);
        alert('✅ Product updated successfully!');
      },
      error: (err) => {
        console.error('❌ Error updating product:', err);
        alert('Error updating product. Please try again.');
      },
    });
  }
}
