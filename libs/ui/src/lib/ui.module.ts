import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AngularMaterialModule } from './angular-material.module';
import { AlertComponent } from './alert/alert.component';

const COMPONENTS = [
  ButtonComponent,
  InputComponent,
  AlertComponent,
]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    ...COMPONENTS
  ],
})
export class UiModule {}
