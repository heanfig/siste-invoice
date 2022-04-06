import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@siste/ui';
import { AuthInteractor } from '../../core/auth.interactor';
import { InvoiceInteractor } from '../../core/invoice.interactor';
import { AuthRepository } from '../../core/repositories/auth.repository';
import { InvoiceRepository } from '../../core/repositories/invoice.repository';
import { AdminRoutingModule } from './admin-routing.module';
import { DialogItemsComponent } from './dialog/dialog-items/dialog-items';
import { DialogPersonComponent } from './dialog/dialog-person/dialog-person';
import { LayoutComponent } from './layout/layout.component';
import { AdminMiddleware } from './middleware/admin.middleware';
import { AdminOrganismModule } from './organisms/admin-organisms.module';
import { CreateInvoicePageComponent } from './pages/create-invoice/create-invoice.page';
import { ListInvoicePageComponent } from './pages/list-invoice/list-invoice.page';

const DIALOGS = [
  DialogItemsComponent,
  DialogPersonComponent,
];
@NgModule({
  declarations: [ 
    LayoutComponent, 
    ListInvoicePageComponent, 
    CreateInvoicePageComponent,
    ...DIALOGS
  ],
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
    },
    {
      provide: InvoiceInteractor,
      deps: [InvoiceRepository],
      useClass: InvoiceInteractor,
    }
  ],
})
export class AdminModule {}
