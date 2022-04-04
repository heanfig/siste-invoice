import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './pages/home/dashboard-home.page';
import { ListInvoicePageComponent } from './pages/list-invoice/list-invoice.page';

@NgModule({
  declarations: [ LayoutComponent, HomePageComponent, ListInvoicePageComponent ],
  imports: [
    UiModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule {}
