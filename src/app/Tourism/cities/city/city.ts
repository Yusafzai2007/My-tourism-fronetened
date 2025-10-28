import { Component, OnInit } from '@angular/core';
import { Tourism } from '../../../services/tourism';
import { tourismResponse, User } from '../../../Interface/city';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city',
  imports: [CommonModule, RouterLink],
  templateUrl: './city.html',
  styleUrl: './city.css',
})
export class City implements OnInit {
  citiesdata: User[] = [];

  ngOnInit(): void {
    this.city();
  }

  constructor(private dep: Tourism) {}

  city() {
    this.dep.cities().subscribe((res: tourismResponse) => {
      this.citiesdata = res.tourism;
      console.log(this.citiesdata);
    });
  }
}
