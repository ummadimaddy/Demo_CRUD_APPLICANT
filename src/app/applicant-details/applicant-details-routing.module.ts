import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeatilsComponent } from './deatils/deatils.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: DeatilsComponent
  },
  {
    path: ':id',
    pathMatch:'full',
    component: DeatilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantDetailsRoutingModule { }
