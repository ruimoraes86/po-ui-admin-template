import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoUiModule } from 'src/app/core/po-ui.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';

import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';

const components = [
  UiFeaturesComponent,
  GridComponent,
  IconsComponent,
  TypographyComponent
];

@NgModule({
  imports: [
    CommonModule,
    PoUiModule,
    UiFeaturesRoutingModule,
  ],
  declarations: [
    components,
  ],
})
export class UiFeaturesModule { }
