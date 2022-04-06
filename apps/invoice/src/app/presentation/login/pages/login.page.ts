import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInteractor } from '../../../core/auth.interactor';

@Component({
  selector: 'siste-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent {
  constructor(
    private router: Router,
    private interactor: AuthInteractor,
  ) {}

  async onLogin() {
    const result = await this.interactor.signIn('admin', 'admin');
    console.warn(result)
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }
}
