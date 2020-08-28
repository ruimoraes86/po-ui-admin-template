import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalOverlaysRoutingModule} from './modal-overlays-routing.module';

import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';
import { PopoverComponent } from './popover/popover.component';
import { ToastsComponent } from './toasts/toasts.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PoModule } from '@po-ui/ng-components';

const components = [
  ModalOverlaysComponent,
  DialogComponent,
  WindowComponent,
  PopoverComponent,
  ToastsComponent,
  TooltipComponent
]

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    ModalOverlaysRoutingModule
  ],
  declarations: [
    ...components    
  ]
})
export class ModalOverlaysModule { }
