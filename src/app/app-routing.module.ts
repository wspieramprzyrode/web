import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGroupAuthGuard } from './core/auth/guards/admin-group-auth.guard';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [{
      path: 'place-categories',
      canActivate: [AdminGroupAuthGuard],
      loadChildren: () => import('./features/admin/place-categories/place-categories.module').then(m => m.PlaceCategoriesModule)
    }]
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
