import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin } from '../admin-services/admin';

@Component({
  selector: 'app-add-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-admin.html',
  styleUrl: './add-admin.css',
})
export class AddAdmin {
  Admindata = {
    userName: '',
    email: '',
    password: '',
  };

  constructor(private service: Admin) {}

  add_Admin() {
    console.log(this.Admindata);
    this.service.Admin(this.Admindata).subscribe({
      next: (res) => {
        console.log(res);
        alert('success');
        this.Admindata = {
          userName: '',
          email: '',
          password: '',
        };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
