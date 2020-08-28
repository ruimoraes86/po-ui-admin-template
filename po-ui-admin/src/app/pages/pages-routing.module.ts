import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'layout',
            loadChildren: () => import('./layout/layout.module')
                .then(m => m.LayoutModule),
        },
        {
            path: 'ui-features',
            loadChildren: () => import('./ui-features/ui-features.module')
                .then(m => m.UiFeaturesModule),
        },
        {
            path: 'modal-overlays',
            loadChildren: () => import('./modal-overlays/modal-overlays.module')
                .then(m => m.ModalOverlaysModule),
        },
        {
            path: 'miscellaneous',
            loadChildren: () => import('./miscellaneous/miscellaneous.module')
                .then(m => m.MiscellaneousModule),
        },
        {
            path: 'auth',
            loadChildren: () => import('./auth/auth.module')
                .then(m => m.AuthModule),
        },
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
        {
            path: '**',
            component: NotFoundComponent,
        },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}