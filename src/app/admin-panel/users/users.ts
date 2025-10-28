import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin-services/admin';
import { signupdata, singindata } from '../../Interface/signup';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { deleteuser, signupdatauser } from '../../Interface/delet-user';

@Component({
  selector: 'app-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  users: signupdatauser[] = [];
  filterusers: signupdatauser[] = [];
  searchUsers: string = '';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 5; // Number of users per page
  totalPages: number = 0;

  constructor(private service: Admin) {}

  ngOnInit(): void {
    this.fetchusers();
  }

  fetchusers() {
    this.service.getallusers().subscribe((res: deleteuser) => {
      this.users = res.tourism.users;
      this.totalPages = Math.ceil(this.users.length / this.pageSize);
      this.updateFilterUsers();
    });
  }

  fillterusers() {
    const term = this.searchUsers.toLowerCase();
    const filtered = this.users.filter(
      (user) =>
        user.userName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.currentPage = 1;
    this.updateFilterUsers(filtered);
  }

  updateFilterUsers(filteredList?: signupdatauser[]) {
    const list = filteredList || this.users;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.filterusers = list.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilterUsers();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilterUsers();
    }
  }
// Add this method inside your Users class
getEndIndex(): number {
  return Math.min(this.currentPage * this.pageSize, this.users.length);
}

  deleteuserdata(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.deleteuser(id).subscribe({
        next: (res) => {
          alert('User deleted successfully');
          this.fetchusers(); // Refresh list after deletion
        },
        error: (err) => {
          console.error('Error deleting user:', err);
          alert('Failed to delete user');
        },
      });
    }
  }
}

