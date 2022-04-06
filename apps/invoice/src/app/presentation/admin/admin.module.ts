import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { AuthInteractor } from '../../core/auth.interactor';
import { AuthRepository } from '../../core/repositories/auth.repository';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AdminMiddleware } from './middleware/admin.middleware';
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
  providers: [
    AdminMiddleware,
    {
      provide: AuthInteractor,
      deps: [AuthRepository],
      useClass: AuthInteractor,
    }
  ],
})
export class AdminModule {}
