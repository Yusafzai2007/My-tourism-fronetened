import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-all-com',
  imports: [Navbar, Footer],
  templateUrl: './all-com.html',
  styleUrl: './all-com.css'
})
export class AllCom {

}
