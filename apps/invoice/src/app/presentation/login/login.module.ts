import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login.page';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    UiModule,
    LoginRoutingModule,
  ],
  providers: [],
})
export class LoginModule {}
