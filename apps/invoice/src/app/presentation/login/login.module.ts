import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UiModule } from '@siste/ui';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login.page';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    UiModule,
    LoginRoutingModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
})
export class LoginModule {}
