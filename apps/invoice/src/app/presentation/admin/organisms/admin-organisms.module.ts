import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@siste/ui';
import { SideNavComponent } from './side-nav/side-nav.organism';
import { TopNavComponent } from './top-nav/top-nav.organism';

const materialModules = [
    TopNavComponent,
    SideNavComponent,
];

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
  ],
  declarations: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})
export class AdminOrganismModule { }