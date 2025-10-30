import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Tourism } from '../../services/tourism';
import { tourismResponse, User } from '../../Interface/city';
import { FormsModule } from '@angular/forms';
import { Admin } from '../admin-services/admin';
import { signupdata, singindata } from '../../Interface/signup';
import { UserResponse } from '../../Interface/add-admin';
import { productResponsedata, tourismproduct } from '../../Interface/products';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar implements OnInit {
  isSidebarOpen = true;
  screenWidth = window.innerWidth;
  isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
    this.checkScreen();
  }

  constructor(private service: Tourism, private route: Router, private serviceadmin: Admin) {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobileView = this.screenWidth < 1024;
    if (this.isMobileView) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  get shouldShowSidebar() {
    return this.isSidebarOpen;
  }

  logout() {
    this.service.logout().subscribe({
      next: () => {
        alert('Logout successfully!');
        this.route.navigateByUrl('/login');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.cities();
  }

  citiesdata: User[] = [];

  cities() {
    this.service.cities().subscribe((res: tourismResponse) => {
      this.citiesdata = res.tourism;
    });
  }

  seachdata: productResponsedata[] = [];

searchproduct(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement;
  const value = input.value.trim();

  if (value.length > 0) {
    this.serviceadmin.search_product(value).subscribe({
      next: (res: tourismproduct) => {
        // API returns all products, so filter by title (case-insensitive)
        this.seachdata = res.tourism.Product.filter((item) =>
          item.producttitle.toLowerCase().includes(value.toLowerCase())
        );
      },
      error: (err) => console.log(err),
    });
  } else {
    this.seachdata = []; // clear results
  }
}


}
