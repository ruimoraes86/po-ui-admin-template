import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms.component';
import { PoUiModule } from 'src/app/core/po-ui.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';

const components = [
  FormsComponent,
  ButtonsComponent,
  DatepickerComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsRoutingModule,
    PoUiModule
  ],
  declarations: [
    ...components
  ]
})
export class FormsPageModule { }
