import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceCategoriesRoutingModule } from './place-categories-routing.module';
import { PlaceCategoriesComponent } from './place-categories.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    PlaceCategoriesComponent
  ],
  imports: [
    CommonModule,
    PlaceCategoriesRoutingModule,
    TableModule,
    ButtonModule,
    CardModule
  ],
  exports: [
    PlaceCategoriesComponent
  ],
})
export class PlaceCategoriesModule { }
