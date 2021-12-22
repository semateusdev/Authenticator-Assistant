import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { LoginGuard } from './admin/guardians/login.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',        
        redirectTo: 'authForm',
        pathMatch: 'full',
      },
      {
        path: 'authForm',
        canActivate:[LoginGuard],
        loadChildren: () => import('./form-auth/form-auth.module').then(m => m.FormAuthModule)
      }
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
