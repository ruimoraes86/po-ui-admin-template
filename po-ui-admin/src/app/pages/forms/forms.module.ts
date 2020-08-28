import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms.component';
import { PoUiModule } from 'src/app/core/po-ui.module';

const components = [
  FormsComponent,
  ButtonsComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    PoUiModule
  ],
  declarations: [
    ...components
  ]
})
export class FormsModule { }
