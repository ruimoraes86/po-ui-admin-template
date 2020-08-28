import { NgModule } from '@angular/core';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PoModule } from '@po-ui/ng-components';

const components = [
  MiscellaneousComponent,
  NotFoundComponent
]

@NgModule({
  imports: [
    PoModule,
    MiscellaneousRoutingModule
  ],
  declarations: [ 
  ...components
  ],
})
export class MiscellaneousModule { }
