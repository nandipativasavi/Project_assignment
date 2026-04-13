import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users implements OnInit {

  users: any[] = [];
  isAdmin: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkAdmin();
    this.loadUsers();
  }

  checkAdmin() {
    const role = localStorage.getItem('role');
    this.isAdmin = role === 'Admin';
  }

  loadUsers() {
    const token = localStorage.getItem('token');

    this.http.get('http://localhost:5000/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (res: any) => {
        this.users = res.users;
      },
      error: () => {
        alert('Access denied ❌');
      }
    });
  }

  deleteUser(id: string) {
    const token = localStorage.getItem('token');

    this.http.delete(`http://localhost:5000/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe(() => {
      this.loadUsers();
    });
  }
}