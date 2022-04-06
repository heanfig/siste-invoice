import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthMiddleware implements CanActivate {

 constructor(
    private router: Router){
 }

  public async canActivate() {
    if(localStorage.getItem('userdata') !== null) {
        this.router.navigate(['/admin/list']);
    }
    return true;
  }
}
