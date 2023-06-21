import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent, FeaturedLayoutComponent } from "@app-layouts/layout-blueprints";
import { HeaderComponent, FooterComponent, LeftMenuBarComponent, LeftSidebarComponent, SidebarUserboxComponent, HeaderUserboxComponent, HeaderNotificationComponent, HeaderMsgBoxComponent } from "@app-layouts/layout-components";
import { SharedModule } from '@app-shared/shared.module';
import { AngularResizedEventModule } from 'angular-resize-event';
import { NotifierService } from 'angular-notifier';

const DECLARATIONS_COMPONENTS: any = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  AuthLayoutComponent,
  LeftSidebarComponent,
  LeftMenuBarComponent,
  FeaturedLayoutComponent,
  SidebarUserboxComponent,
  HeaderUserboxComponent,
  HeaderNotificationComponent,
  HeaderMsgBoxComponent
]

@NgModule({
  declarations: [...DECLARATIONS_COMPONENTS],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AngularResizedEventModule
  ],
  providers: [NotifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
