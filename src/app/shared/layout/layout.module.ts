import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutNavbarModule } from './components/layout-navbar/layout-navbar.module';
import { LayoutSidebarModule } from './components/layout-sidebar/layout-sidebar.module';
import { LayoutFooterModule } from './components/layout-footer/layout-footer.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutNavbarModule,
    LayoutSidebarModule,
    LayoutFooterModule
  ]
})
export class LayoutModule { }
