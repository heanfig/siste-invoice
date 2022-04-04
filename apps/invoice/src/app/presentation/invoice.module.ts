import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { LoginPageComponent } from './pages/login.page';

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    UiModule,
    InvoiceRoutingModule,
  ],
  providers: [],
})
export class InvoiceModule {}
