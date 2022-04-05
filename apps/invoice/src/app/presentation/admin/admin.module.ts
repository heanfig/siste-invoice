import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AdminOrganismModule } from './organisms/admin-organisms.module';
import { CreateInvoicePageComponent } from './pages/create-invoice/create-invoice.page';
import { ListInvoicePageComponent } from './pages/list-invoice/list-invoice.page';

@NgModule({
  declarations: [ LayoutComponent, ListInvoicePageComponent, CreateInvoicePageComponent ],
  imports: [
    CommonModule,
    UiModule,
    AdminRoutingModule,
    AdminOrganismModule,
  ],
  providers: [],
})
export class AdminModule {}
