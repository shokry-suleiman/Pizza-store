import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppLayoutComponent } from './app-layout.component';


@NgModule({
  declarations: [HeaderComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    AppLayoutRoutingModule
  ]
})
export class AppLayoutModule { }
