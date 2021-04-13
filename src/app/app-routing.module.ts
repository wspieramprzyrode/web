import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'c',
    component: LayoutComponent,
    loadChildren: () => import('./features/admin/place-categories/place-categories.module').then(m => m.PlaceCategoriesModule)
  },
  {
    path: 'login',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
