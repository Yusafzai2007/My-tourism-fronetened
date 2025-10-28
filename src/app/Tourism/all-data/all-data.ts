import { Component } from '@angular/core';
import { Slidingimaes } from "../navbar/slidingimaes/slidingimaes";
import { City } from "../cities/city/city";
import { Travel } from "../travel/travel";
import { TravelAgency } from "../travel-agency/travel-agency";
import { SlidingImages } from "../sliding-images/sliding-images";
import { Balls } from "../balls/balls";
import { GetAllProducts } from "../get-all-products/get-all-products";

@Component({
  selector: 'app-all-data',
  imports: [Slidingimaes, City, Travel, TravelAgency, SlidingImages, Balls, GetAllProducts],
  templateUrl: './all-data.html',
  styleUrl: './all-data.css'
})
export class AllData {

}
