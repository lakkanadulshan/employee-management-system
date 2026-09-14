import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    username: '',
    password: '',
  };

  router = inject(Router);

  onLogin() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == 'admin123') {
      alert('Login successful');
      this.router.navigate(['/dashboard']);
      console.log('Login successful');
    } else {
      alert('Login failed');
      console.log('Login failed');
    }
  }
}
