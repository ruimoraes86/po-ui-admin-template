import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { PoModule } from '@po-ui/ng-components';

import { DashboardModule } from './dashboard/dashboard.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    PoModule,
    MiscellaneousModule,
    DashboardModule,
    SharedModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}