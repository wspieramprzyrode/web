import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceCategoriesRoutingModule } from './place-categories-routing.module';
import { PlaceCategoriesComponent } from './place-categories.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    PlaceCategoriesComponent
  ],
  imports: [
    CommonModule,
    PlaceCategoriesRoutingModule,
    TableModule
  ],
  exports: [
    PlaceCategoriesComponent
  ],
})
export class PlaceCategoriesModule { }
