import { Component } from '@angular/core';
import { Boxes } from "../boxes/boxes";
import { Charts } from "../charts/charts";

@Component({
  selector: 'app-all-com-admin',
  imports: [Boxes, Charts],
  templateUrl: './all-com-admin.html',
  styleUrl: './all-com-admin.css'
})
export class AllComAdmin {

}
