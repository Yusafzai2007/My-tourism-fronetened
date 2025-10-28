import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Tourism } from '../../../services/tourism';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'], // 👈 fix plural
})
export class Login {
  constructor(private dep: Tourism, private route: Router) {}

  logindata = {
    email: 'yusafzai2007@gmail.com',
    password: '123',
  };

  submit() {
    console.log(this.logindata);

    this.dep.login(this.logindata).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.tourism.role === 'admin') {
          this.route.navigateByUrl('/admin');
        } else {
          this.route.navigateByUrl('');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
