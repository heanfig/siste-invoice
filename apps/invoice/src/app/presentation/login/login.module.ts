import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@siste/ui';
import { AuthInteractor } from '../../core/auth.interactor';
import { AuthRepository } from '../../core/repositories/auth.repository';
import { LoginRoutingModule } from './login-routing.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { LoginPageComponent } from './pages/login.page';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    CommonModule,
    UiModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    AuthMiddleware,
    {
      provide: AuthInteractor,
      deps: [AuthRepository],
      useClass: AuthInteractor,
    }
  ],
})
export class LoginModule {}
