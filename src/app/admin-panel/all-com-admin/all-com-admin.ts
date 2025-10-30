import { Component } from '@angular/core';
import { Boxes } from "../boxes/boxes";
import { Charts } from "../charts/charts";
import { Orders } from "../orders/orders";
import { Users } from "../users/users";

@Component({
  selector: 'app-all-com-admin',
  imports: [Boxes, Charts, Orders, Users],
  templateUrl: './all-com-admin.html',
  styleUrl: './all-com-admin.css'
})
export class AllComAdmin {

}
