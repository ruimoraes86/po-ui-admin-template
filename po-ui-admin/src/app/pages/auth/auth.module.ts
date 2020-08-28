import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule} from './auth-routing.module';
import { PoPageChangePasswordModule } from '@po-ui/ng-templates';
import { PoPageBlockedUserModule } from '@po-ui/ng-templates';
import { PoPageLoginModule } from '@po-ui/ng-templates';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BlockedUserComponent } from './blocked-user/blocked-user.component';
import { PoModule } from '@po-ui/ng-components';

const components = [
  AuthComponent,
  LoginComponent, 
  ChangePasswordComponent, 
  BlockedUserComponent,
]

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoPageChangePasswordModule,
    PoPageBlockedUserModule,
    PoPageLoginModule,
    AuthRoutingModule
  ],
  declarations: [
    ...components
  ]
})
export class AuthModule { }
