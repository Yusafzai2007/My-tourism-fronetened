import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin-services/admin';
import { productResponsedata, tourismproduct } from '../../Interface/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-safari-table',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './safari-table.html',
  styleUrl: './safari-table.css',
})
export class SafariTable implements OnInit {
  productdata: productResponsedata[] = [];
  filterproduct: productResponsedata[] = [];
  searchtitle: string = '';
  cityname: string = 'All';
  rowperPage: number | 'All' = 'All';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 8;
  totalPages: number = 0;

  constructor(private service: Admin) {}

  ngOnInit(): void {
    this.products();
  }

  products() {
    this.service.add_products().subscribe((res: tourismproduct) => {
      this.productdata = res.tourism.Product;
      this.totalPages = Math.ceil(this.productdata.length / this.pageSize);
      this.currentPage = 1;
      this.updateFilterProducts();
    });
  }

  filterproductdata() {
    const term = this.searchtitle.toLowerCase();
    const city = this.cityname;

    let filtered = this.productdata.filter((p) => {
      const matchTitle = p.producttitle.toLowerCase().includes(term);
      const matchCity = city === 'All' || p.city.cityName.toLowerCase() === city.toLowerCase();
      return matchTitle && matchCity;
    });

    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.currentPage = 1;

    if (this.rowperPage === 'All') {
      this.filterproduct = filtered;
    } else {
      this.filterproduct = filtered.slice(0, Number(this.rowperPage));
    }

    this.updateFilterProducts(filtered);
  }

  updateFilterProducts(filteredList?: productResponsedata[]) {
    const list = filteredList || this.productdata;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.filterproduct = list.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilterProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilterProducts();
    }
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.filterproduct.length);
  }

  table = [
    'Cities',
    'City',
    'Category',
    'Adult',
    'Child',
    'Discount',
    'final',
    'Transport',
    'Tour',
    'Language',
    'P-Transfer',
    'EDIT',
    'Delete',
  ];

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.service.delete_product(id).subscribe({
        next: () => {
          alert('Product deleted successfully');
          this.products();
        },
        error: (err) => {
          console.error('Delete error:', err);
          alert('Failed to delete product');
        },
      });
    }
  }
}
