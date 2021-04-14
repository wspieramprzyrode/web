import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSidebarComponent } from './layout-sidebar.component';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  declarations: [
    LayoutSidebarComponent,

  ],
  imports: [
    CommonModule,
    PanelMenuModule
  ],
  exports: [
    LayoutSidebarComponent,
  ]
})
export class LayoutSidebarModule { }
