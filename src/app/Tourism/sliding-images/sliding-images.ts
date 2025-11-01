import { Component, OnInit } from '@angular/core';
import { Tourism } from '../../services/tourism';
import { productResponsedata, tourismproduct } from '../../Interface/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sliding-images',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './sliding-images.html',
  styleUrl: './sliding-images.css'
})
export class SlidingImages implements OnInit {

  dep:productResponsedata[]=[];


  constructor(private service:Tourism) { }
   
  ngOnInit(): void {
    this.productdata();
  }
  
  productdata(){
    this.service.allProducts().subscribe((res:tourismproduct)=>{
      this.dep=res.tourism.Product;
      console.log(this.dep);
    })
  }
}
