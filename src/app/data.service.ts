import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Applicant } from './shared/applicant.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = 'http://localhost:3000/posts'
  loginProfile = 'http://localhost:3000/profile'
  userID = new Subject<boolean>();
  
  constructor(public http:HttpClient) { 
    // const userID = sessionStorage.getItem('UserLoggedStatus');
    // this.userID.next(true);
  }
  
  public getApplicants() {
    return this.http.get<any[]>(this.api);
  }
  public getApplicantDetails(id:number){
    return this.http.get(this.api + '/' + id)
  }
  public updateApplicant(id:number, applincatObj:Applicant){
    return this.http.put<any[]>(this.api+ '/' + id, applincatObj)
  }
  public deleteApplicant(id:number | undefined) {
    return this.http.delete<any>(this.api +'/' + id);
  }
  public addApplicant(applicantObj:Applicant) {
    return this.http.post(this.api , applicantObj);
  }
  public createuser(userObj:{}) {
    return this.http.post(this.loginProfile,userObj)
  }
  public getuser(){
    return this.http.get(this.loginProfile)
  }
  public getUserStatus(){
    return sessionStorage.getItem('UserLoggedStatus')
  }
  setUserID(flag:boolean) {
    this.userID.next(flag);
}
}

