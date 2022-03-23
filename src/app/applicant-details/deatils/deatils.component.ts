import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Applicant } from 'src/app/shared/applicant.interface';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.scss']
})
export class DeatilsComponent implements OnInit {
  public applicantDetailsForm: FormGroup;
  public applicantID: number;
  constructor(public formBuilder: FormBuilder, public dataService: DataService, public activatedRoute: ActivatedRoute,public route:Router) {
    this.applicantID = this.activatedRoute.snapshot.params['id'];
    if (this.applicantID !== undefined) {
      this.getApplicantDetails()
    }
    this.applicantDetailsForm = formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]{0,10}$")]],
      lastName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]{0,10}$")]],
      userName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]{0,10}$")]],
      city: ['', [Validators.required,Validators.pattern("^[a-zA-Z]{0,10}$")]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required,Validators.pattern("^[0-9]{0,6}$")]],
      id: ['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.applicantID !== undefined) {
      this.dataService.updateApplicant(this.applicantID, this.applicantDetailsForm.value).subscribe(data => {
        console.log(data, "============> updated successfully")
      })
    } else {
      this.dataService.addApplicant(this.applicantDetailsForm.value).subscribe(data => {
        console.log(data, "==============>posed successfully")
      })
    }
    this.route.navigate(['dashboard'])

  }
  getApplicantDetails() {
    this.dataService.getApplicantDetails(this.applicantID).subscribe((data) => {
      this.applicantDetailsForm.setValue(data)
    })
  }
  onCancel() {
    if(this.applicantID===undefined){
      this.applicantDetailsForm.reset()
    } else {
      this.getApplicantDetails()
    }
  }

}
