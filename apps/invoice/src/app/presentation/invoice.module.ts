import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NxWelcomeComponent } from './pages/nx-welcome.component';

@NgModule({
  declarations: [NxWelcomeComponent],
  imports: [
    InvoiceRoutingModule
  ],
  providers: [],
})
export class InvoiceModule {}
