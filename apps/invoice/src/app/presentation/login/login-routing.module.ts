import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMiddleware } from './middleware/auth.middleware';
import { LoginPageComponent } from './pages/login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [ AuthMiddleware ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
