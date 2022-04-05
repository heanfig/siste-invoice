import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AngularMaterialModule } from './angular-material.module';

const COMPONENTS = [
  ButtonComponent,
  InputComponent,
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
