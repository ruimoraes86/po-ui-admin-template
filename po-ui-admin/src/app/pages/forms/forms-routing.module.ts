import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [{
    path: '',
    component: FormsComponent,
    children: [{
        path: 'buttons',
        component: ButtonsComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FormsRoutingModule { }
