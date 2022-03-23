import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';


@NgModule({
  declarations: [
    ApplicantListComponent,
    ConfirmationPopupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashsboardModule { }
