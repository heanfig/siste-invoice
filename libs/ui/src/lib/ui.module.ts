import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule
  ],
  declarations: [
    ButtonComponent,
    InputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiModule {}
