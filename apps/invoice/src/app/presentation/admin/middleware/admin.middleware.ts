import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthInteractor } from "../../../core/auth.interactor";
import { SignInEntity } from "../../../core/entities/auth/sign-in.entity";

@Injectable()
export class AdminMiddleware implements CanActivate {

 constructor(
    private router: Router,
    private interactor: AuthInteractor){
 }

  public async canActivate() {
    if(localStorage.getItem('userdata') === null) {
        return this.router.navigate(['/auth/login']);
    }
    const userdata = JSON.parse(localStorage.getItem('userdata') || '{}') || {} as SignInEntity;
    const status = await this.interactor.validateToken(userdata.signInData.deviceToken) || false;
    return status;
  }
}
