import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin-services/admin';
import { tourismResponse, User } from '../../Interface/city';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCities } from '../add-cities/add-cities';

@Component({
  selector: 'app-cities-data',
  imports: [CommonModule, FormsModule, AddCities],
  templateUrl: './cities-data.html',
  styleUrl: './cities-data.css',
})
export class CitiesData implements OnInit {
  cities: User[] = [];
  filtercities: User[] = [];
  serchitem: string = '';
  filtercity: string = 'All';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 10; // cities per page
  totalPages: number = 0;

  constructor(private service: Admin) {}

  ngOnInit(): void {
    this.citiydata();
  }

  citiydata() {
    this.service.allCities().subscribe((res: tourismResponse) => {
      this.cities = res.tourism;
      this.totalPages = Math.ceil(this.cities.length / this.pageSize);
      this.currentPage = 1;
      this.updateFilterCities();
    });
  }

  filterdata() {
    const term = this.serchitem.toLowerCase();
    const status = this.filtercity;

    const filtered = this.cities.filter((city) => {
      const matchesName = city.cityName.toLowerCase().includes(term);
      const matchesStatus = status === 'All' || city.status.toLowerCase() === status.toLowerCase();
      return matchesName && matchesStatus;
    });

    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.currentPage = 1;
    this.updateFilterCities(filtered);
  }

  updateFilterCities(filteredList?: User[]) {
    const list = filteredList || this.cities;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.filtercities = list.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilterCities();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilterCities();
    }
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.filtercities.length);
  }
}
