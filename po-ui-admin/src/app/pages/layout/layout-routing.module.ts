import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [{
        path: 'accordion',
        component: AccordionComponent,
    }, {
        path: 'list',
        component: ListComponent,
    }, {
        path: 'stepper',
        component: StepperComponent,
    }, {
        path: 'tabs',
        component: TabsComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LayoutRoutingModule { }
