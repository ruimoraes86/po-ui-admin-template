import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent} from './auth.component';
import { LoginComponent} from './login/login.component';
import { ChangePasswordComponent} from './change-password/change-password.component';
import { BlockedUserComponent} from './blocked-user/blocked-user.component';

const routes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [{
        path: 'login',
        component: LoginComponent,
    }, {
        path: 'change-password',
        component: ChangePasswordComponent,
    }, {
        path: 'blocked-user',
        component: BlockedUserComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AuthRoutingModule { }
