import { Component } from '@angular/core';
import { Boxes } from "../boxes/boxes";
import { Charts } from "../charts/charts";

@Component({
  selector: 'app-all-com',
  imports: [Boxes, Charts],
  templateUrl: './all-com.html',
  styleUrl: './all-com.css'
})
export class AllCom {

}
