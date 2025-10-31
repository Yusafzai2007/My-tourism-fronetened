import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Tourism } from '../../../services/tourism';
import { productResponse, tourismdata } from '../../../Interface/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-city-details',
  standalone: true,
  templateUrl: './city-details.html',
  styleUrls: ['./city-details.css'],
  imports: [CommonModule, FormsModule, RouterLink],
})
export class CityDetails implements OnInit, AfterViewInit, OnDestroy {
  dep: productResponse[] = [];
  filterproduct: productResponse[] = [];
  visibleProducts: productResponse[] = []; // 👈 for "view more" logic
  currentIndexes: number[] = [];
  autoSlideInterval: any;
  uniqueCategories: { category: string; count: number }[] = [];
  searchitme: string = 'All';
  itemsToShow = 6; // 👈 how many to show initially

  constructor(private active: ActivatedRoute, private service: Tourism) {}

  ngOnInit(): void {
    this.active.paramMap.subscribe((params) => {
      const cityName = params.get('cityName');
      if (cityName) this.loadCityData(cityName);
    });

    // Auto slide images
    this.autoSlideInterval = setInterval(() => {
      this.dep.forEach((p, idx) => {
        if (p.thumbnailimage?.length > 0) {
          this.nextSlide(idx, p.thumbnailimage.length);
        }
      });
    }, 4000);
  }

  loadCityData(cityName: string): void {
    this.service.singlecity(cityName).subscribe((res: tourismdata) => {
      this.dep = res.tourism.city;
      this.filterproduct = this.dep;
      this.visibleProducts = this.filterproduct.slice(0, this.itemsToShow); // 👈 show limited
      this.currentIndexes = this.dep.map(() => 0);
      this.calculateUniqueCategories();
    });
  }

  filterproductdata() {
    const matchcategory = this.searchitme;

    if (matchcategory === 'All') {
      this.filterproduct = this.dep;
    } else {
      this.filterproduct = this.dep.filter(
        (product) =>
          product.category.toLowerCase() === matchcategory.toLowerCase()
      );
    }

    // reset visible items when filtering
    this.itemsToShow = 4;
    this.visibleProducts = this.filterproduct.slice(0, this.itemsToShow);
  }

  // 👇 Show more products each click
  viewMore() {
    this.itemsToShow += 4;
    this.visibleProducts = this.filterproduct.slice(0, this.itemsToShow);
  }

  calculateUniqueCategories(): void {
    const categoryCount: { [key: string]: number } = {};
    this.dep.forEach((item) => {
      const cat = item.category;
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });

    this.uniqueCategories = Object.keys(categoryCount).map((key) => ({
      category: key,
      count: categoryCount[key],
    }));
  }

  nextSlide(productIndex: number, length: number): void {
    this.currentIndexes[productIndex] =
      (this.currentIndexes[productIndex] + 1) % length;
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }
}
