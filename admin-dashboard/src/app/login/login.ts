import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // ✅ ADD
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router // ✅ ADD
  ) {}

  handleLogin(event: Event) {
    event.preventDefault();

    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:5000/api/users/login', data)
      .subscribe({
        next: (res: any) => {
          alert('Login successful ✅');

          // store token
          localStorage.setItem('token', res.token);

          // ✅ CORRECT REDIRECT
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.log(err);
          alert(err.error?.message || 'Login failed');
        }
      });
  }
}