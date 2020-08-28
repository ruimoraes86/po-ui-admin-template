import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [{
    path: '',
    component: FormsComponent,
    children: [{
        path: 'buttons',
        component: ButtonsComponent,
    },
    {
        path: 'datepicker',
        component: DatepickerComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FormsRoutingModule { }
