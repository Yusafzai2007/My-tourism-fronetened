import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Admin } from '../admin-services/admin';

@Component({
  selector: 'app-add-cities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-cities.html',
  styleUrls: ['./add-cities.css'],
})
export class AddCities {
  isModalOpen = false;
  city = {
    cityName: '',
    cityImage: '',
    status: '',
    cityDescription: '',
  };

  constructor(private service: Admin) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.city.cityImage = file;
    }
  }

  onSubmit() {
    const formdata = new FormData();
    formdata.append('cityName', this.city.cityName);
    formdata.append('status', this.city.status);
    formdata.append('cityDescription', this.city.cityDescription);

    if (this.city.cityImage) {
      formdata.append('cityImage', this.city.cityImage);
    }

    console.log('🧾 Form Data:', this.city);

    this.service.addcities(formdata).subscribe({
      next: (res) => {
        console.log('City added successfully:', res);
        alert('✅ City added successfully!');
        this.closeModal();
      },
      error: (err) => {
        console.error('Error adding city:', err);
        alert('❌ Failed to add city. Please try again.');
      },
    });
  }
}
