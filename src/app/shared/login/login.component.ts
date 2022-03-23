import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { LoginUserObj } from '../applicant.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup;
  constructor(public formbuilder: FormBuilder, public dataService: DataService,public route:Router) {
    this.loginform = formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    const obj = {
      email: 'Maddy@gmail.com',
      password: 'Maddy@55'
    }
    this.dataService.createuser(obj).subscribe()
  }
  public loggedInUser: LoginUserObj = {};
  ngOnInit(): void {
    this.dataService.getuser().subscribe(data => {
      this.loggedInUser = data
    })
  }
  onsubmit() {
    if (this.loginform.value.email === this.loggedInUser.email && this.loginform.value.password === this.loggedInUser.password) {
      this.route.navigate(['dashboard'])
      sessionStorage.setItem("UserLoggedStatus","LoggedIn");
      this.dataService.setUserID(true)
    }
    else {
      alert('invalid Credentails')
    }
  }
  onClear(){
    this.loginform.reset()
  }
}
