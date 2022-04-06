import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminRoutes } from './admin-routes';
import { LayoutComponent } from './layout/layout.component';
import { AdminMiddleware } from './middleware/admin.middleware';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ AdminMiddleware ],
    children: [
      ...adminRoutes,
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
