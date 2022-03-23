import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Applicant } from 'src/app/shared/applicant.interface';
import {MatDialogRef,MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';
@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements OnInit {
  public applicantList: Applicant[] = []
  constructor(public dataService: DataService, public route: Router,
  public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getCompleteApplicantList()
  }
  getCompleteApplicantList(){
    this.applicantList = []
    this.dataService.getApplicants().subscribe(data => {
      this.applicantList = data
    })
  }
  updateApplicant(applicant: Applicant): void {
    this.route.navigate(['applicant-details', applicant.id])

  }
  deleteApplicant(applicant: Applicant): void {
    const dialogRef: MatDialogRef<ConfirmationPopupComponent> = this.dialog.open(ConfirmationPopupComponent,
      {
          width: '640px',
          data:{
            title: 'Delete Confirmation',
            Component: ConfirmationPopupComponent,
            applicantDetails:applicant
          }
      });
      if(dialogRef){
        dialogRef.afterClosed().subscribe((data)=>{
          if(data){
            this.getCompleteApplicantList();
          }
        })
      }
  }
}

