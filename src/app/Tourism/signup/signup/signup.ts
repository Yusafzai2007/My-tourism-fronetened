import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Tourism } from '../../../services/tourism';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {


     constructor(private dep:Tourism,private route:Router){}

 signupdata={
  userName:'',
  email:'',
  password:'',
 }


 submit(){
  console.log(this.signupdata);
  this.dep.signup(this.signupdata).subscribe({
    next:(res)=>{
          console.log(res);
    alert("signup successfully")
    // this.route.navigateByUrl("login")
    },
    error:(err)=>{
        console.error('Signup Failed:', err);
        alert('Signup failed, please try again!');
    }
  })
  
 }



}
