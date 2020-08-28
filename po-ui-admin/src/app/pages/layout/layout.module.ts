import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PoUiModule } from 'src/app/core/po-ui.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { ListComponent } from './list/list.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { LayoutComponent } from './layout.component';
import { StepperComponent } from './stepper/stepper.component';


const components = [
  LayoutComponent,
  StepperComponent,
  ListComponent, 
  AccordionComponent, 
  TabsComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    PoUiModule
  ],
  declarations: [
    ...components
  ]
})
export class LayoutModule { }
