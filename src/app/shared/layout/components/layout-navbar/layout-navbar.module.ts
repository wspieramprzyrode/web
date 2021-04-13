import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutNavbarComponent } from './layout-navbar.component';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [
    LayoutNavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    LayoutNavbarComponent
  ]
})
export class LayoutNavbarModule { }
