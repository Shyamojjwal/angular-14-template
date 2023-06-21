import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { LoginComponent } from './components';
import { SharedModule } from '@app-shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthPagesRoutingModule
  ],
  providers: []
})
export class AuthPagesModule { }
