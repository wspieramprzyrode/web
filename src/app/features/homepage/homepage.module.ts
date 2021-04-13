import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomePageRoutingModule } from './homepage-routing.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomepageComponent
  ],
})
export class HomepageModule { }
