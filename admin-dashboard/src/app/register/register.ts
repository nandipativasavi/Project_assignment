import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = 'user'; // ✅ default role

  constructor(
  private http: HttpClient,
  private router: Router
) {}

  handleRegister(event: Event) {
    event.preventDefault();

    // ✅ basic validation
    if (!this.name || !this.email || !this.password) {
      alert('All fields are required');
      return;
    }

    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.http.post('http://localhost:5000/api/users/register', data)
      .subscribe({
        next: (res: any) => {
          console.log('Success:', res);
          alert('Registered successfully ✅');

          // ✅ clear form
          this.name = '';
          this.email = '';
          this.password = '';
          this.role = 'user';

          // ✅ ADD THIS (IMPORTANT)
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error:', err);

          // ✅ safe error handling
          alert(err.error?.message || 'Registration failed');
        }
      });
  }
}