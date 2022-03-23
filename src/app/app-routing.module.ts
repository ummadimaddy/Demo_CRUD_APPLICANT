import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashsboardModule),
    canActivate: [AuthGuard]
  },
  {
    path:'applicant-details',
    loadChildren: () => import('./applicant-details/applicant-details.module').then(m => m.ApplicantDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path:'applicant-details/:id',
    loadChildren: () => import('./applicant-details/applicant-details.module').then(m => m.ApplicantDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
