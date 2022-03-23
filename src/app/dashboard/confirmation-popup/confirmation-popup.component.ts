import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { Applicant } from 'src/app/shared/applicant.interface';
interface ComponentData {
  title: string,
  component: Component,
  applicantDetails: Applicant
}
@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  public applicantDetails: Applicant = {}
  constructor(public dialogRef: MatDialogRef<ConfirmationPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: ComponentData, public dataService: DataService) {
    this.applicantDetails = data.applicantDetails;
  }

  ngOnInit(): void {
  }
  closeModal(flag:boolean): void {
    this.dialogRef.close(flag)
  }
  deleteCofirmation() {
    this.dataService.deleteApplicant(this.applicantDetails.id).subscribe(data => {
      console.log(data, "==============> deleted successfully")
      this.closeModal(true)
    })
  }
}
