import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Tourism } from '../../services/tourism';
import { tourismResponse, User } from '../../Interface/city';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule,RouterLink],
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

  constructor(private service: Tourism, private route: Router) {
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
}
