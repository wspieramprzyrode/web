import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSidebarComponent } from './layout-sidebar.component';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    LayoutSidebarComponent,

  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [
    LayoutSidebarComponent,
  ]
})
export class LayoutSidebarModule { }
