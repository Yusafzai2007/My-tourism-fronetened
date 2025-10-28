import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin-services/admin';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tourismResponse, User } from '../../Interface/city';

@Component({
  selector: 'app-add-prodcts',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-prodcts.html',
  styleUrl: './add-prodcts.css',
})
export class AddProdcts implements OnInit {
  constructor(private service: Admin) {}

  isloader: boolean = false;
  progress: number = 0;

  products = {
    cityName: '',
    tourservice: '',
    duration: '',
    transportService: '',
    pickup: '',
    producttitle: '',
    productdescription: '',
    discountEndDate: '',
    quantity: '',
    discountpercentage: '',
    discountedtotalprice: '',
    thumbnailimage: [] as File[],
    category: '',
    translatelanguages: '',
    wifi: false,
    Isprivate: false,
    privateAdultPrice: '',
    privateChildPrice: '',
    privatetransferprice: '',
    adultbaseprice: '',
    childbaseprice: '',
  };

  fileselected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.products.thumbnailimage = Array.from(files);
    }
  }

  onPrivateChange(event: any) {
    this.products.Isprivate = event.target.value === 'true';
  }

  submitproduct() {
    const formdata = new FormData();
    formdata.append('cityName', this.products.cityName);
    formdata.append('tourservice', this.products.tourservice);
    formdata.append('duration', this.products.duration);
    formdata.append('transportService', this.products.transportService);
    formdata.append('pickup', this.products.pickup);
    formdata.append('producttitle', this.products.producttitle);
    formdata.append('productdescription', this.products.productdescription);
    formdata.append('discountEndDate', this.products.discountEndDate);
    formdata.append('quantity', String(this.products.quantity));
    formdata.append('discountpercentage', this.products.discountpercentage);
    formdata.append('discountedtotalprice', this.products.discountedtotalprice);
    formdata.append('category', this.products.category);
    formdata.append('translatelanguages', this.products.translatelanguages);
    formdata.append('wifi', String(this.products.wifi));
    formdata.append('Isprivate', String(this.products.Isprivate));
    formdata.append('adultbaseprice', this.products.adultbaseprice);
    formdata.append('childbaseprice', this.products.childbaseprice);

    if (this.products.Isprivate) {
      formdata.append('privateAdultPrice', this.products.privateAdultPrice);
      formdata.append('privateChildPrice', this.products.privateChildPrice);
      formdata.append('privatetransferprice', this.products.privatetransferprice);
    }

    if (this.products.thumbnailimage.length > 0) {
      for (const file of this.products.thumbnailimage) {
        formdata.append('thumbnailimage', file);
      }
    }

    // 🔥 Start loader before API call
    this.isloader = true;
    this.progress = 0;

    // Fake progress animation
    const interval = setInterval(() => {
      if (this.progress < 95) {
        this.progress += 1;
      }
    }, 50);

    // API call
    this.service.Add_products(formdata).subscribe({
      next: (res) => {
        clearInterval(interval);
        this.progress = 100;

        setTimeout(() => {
          this.isloader = false;
          console.log(res);
          alert('✅ Product added successfully!');
        }, 500);
      },
      error: (err) => {
        clearInterval(interval);
        this.progress = 100;
        setTimeout(() => (this.isloader = false), 500);
        console.error('❌ Error:', err);
        alert(err.error?.message || 'Failed to add product');
      },
    });
  }

  deleteProduct(deleteproduct: string) {
    if (confirm('Are you sure you want to delete this payment?')) {
      this.service.delete_product(deleteproduct).subscribe({
        next: (res) => {
          console.log(res);
          alert('🗑️ Deleted successfully');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  cities: User[] = [];

  ngOnInit(): void {
    this.citiydata();
  }

  citiydata() {
    this.service.allCities().subscribe((res: tourismResponse) => {
      this.cities = res.tourism;
      console.log(this.cities);
    });
  }
}
