import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInteractor } from '../../../core/auth.interactor';
import { SignFailException } from '../../../exceptions/sign-fail.exception';

@Component({
  selector: 'siste-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent {

  loginForm: FormGroup;
  isLoading: boolean;
  errorMessage = '';

  get username() {
    return this.loginForm.get('username')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }

  constructor(
    private router: Router,
    private interactor: AuthInteractor,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
      ]),
      password: new FormControl('', Validators.required)
    });
    this.isLoading = false;
  }

  async onLogin() {

    this.isLoading = true;
    try {
      this.errorMessage = '';
      const result = await this.interactor.signIn(this.username, this.password);
      localStorage.setItem('userdata', JSON.stringify(result));
      this.router.navigate(['/admin/list']);
    }
    catch( error ){
      if( error instanceof SignFailException) {
        this.errorMessage = error.errorMessage;
      }
    } finally {
      this.isLoading = false;
    }

  }
}
