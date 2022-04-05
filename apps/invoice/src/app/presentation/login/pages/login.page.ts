import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'siste-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }
}
