import { NgModule } from '@angular/core';

import { PoUiModule } from 'src/app/core/po-ui.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [    
    PoUiModule
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
