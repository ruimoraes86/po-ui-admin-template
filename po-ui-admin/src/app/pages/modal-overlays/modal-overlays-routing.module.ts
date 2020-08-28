import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';
import { PopoverComponent } from './popover/popover.component';
import { ToastsComponent } from './toasts/toasts.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [{
    path: '',
    component: ModalOverlaysComponent,
    children: [{
        path: 'dialog',
        component: DialogComponent,
    }, {
        path: 'window',
        component: WindowComponent,
    }, {
        path: 'popover',
        component: PopoverComponent,
    }, {
        path: 'toasts',
        component: ToastsComponent,
    },
    {
        path: 'tooltip',
        component: TooltipComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ModalOverlaysRoutingModule { }
