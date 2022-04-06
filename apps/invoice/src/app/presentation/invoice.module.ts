import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { InvoiceRoutingModule } from './invoice-routing.module';

@NgModule({
  imports: [
    UiModule,
    InvoiceRoutingModule,
  ],
  providers: []
})
export class InvoiceModule {}
