import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DemoProject';
  userStatus:boolean=false;
  constructor(public dataService:DataService,public route:Router,public auth:AuthGuard){
     this.userStatus = this.dataService.getUserStatus() === 'LoggedIn'?true:false
  }
  ngOnInit(): void {
    this.dataService.userID.subscribe(Data =>{
      if(Data){
        this.userStatus = true
      } else {
        this.userStatus = false
      }
    })
  }
  logoutUser(){
    sessionStorage.setItem('UserLoggedStatus',"LoggedOut")
    this.route.navigate(['login'])
    // this.userStatus =false
    this.dataService.setUserID(false)
  }
}
