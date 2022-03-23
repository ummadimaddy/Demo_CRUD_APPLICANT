import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantDetailsRoutingModule } from './applicant-details-routing.module';
import { DeatilsComponent } from './deatils/deatils.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeatilsComponent
  ],
  imports: [
    CommonModule,
    ApplicantDetailsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ApplicantDetailsModule { }
