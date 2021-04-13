import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceCategoriesComponent } from './place-categories.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceCategoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceCategoriesRoutingModule { }
