import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AdminOrganismModule } from './organisms/admin-organisms.module';
import { HomePageComponent } from './pages/home/dashboard-home.page';
import { ListInvoicePageComponent } from './pages/list-invoice/list-invoice.page';

@NgModule({
  declarations: [ LayoutComponent, HomePageComponent, ListInvoicePageComponent ],
  imports: [
    CommonModule,
    UiModule,
    AdminRoutingModule,
    AdminOrganismModule,
  ],
  providers: [],
})
export class AdminModule {}
