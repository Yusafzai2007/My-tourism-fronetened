import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Tourism } from '../../../services/tourism';
import { tourismResponse, User } from '../../../Interface/city';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
isSidebarOpen = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}

  singledata:User[]=[]

constructor(private dep:Tourism){}

ngOnInit(): void {
  this.fetch()
}
fetch(){
  this.dep.cities().subscribe((res:tourismResponse)=>{
    this.singledata=res.tourism
  })
}


}
