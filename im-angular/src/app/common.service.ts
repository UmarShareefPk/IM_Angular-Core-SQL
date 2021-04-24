import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getUserNameById(id:string):any {

    let allUsers:any[] = JSON.parse(localStorage.getItem("allUsers") || '{}');
    let user = allUsers.find((user) => {
        return user.Id === id;
    });
    if(!user)
      return id;
    return user.FirstName + " " + user.LastName;
  }

  getAllUsers(){
    return JSON.parse(localStorage.getItem("allUsers") || '{}');
  }

  getLoggedInUser(){
    let loginInfo = JSON.parse(localStorage.getItem("user") || '{}');
    return loginInfo.user.Id;
  }

  statusName(status:string):string{
    switch(status){
      case "N":
        return "New";
      case "C":
        return "Closed";
      case "A":
        return "Approved";
      case "I":
        return "In Progress";
      default:
        return status;
    }
  }

  getMoment(datetime:any):Moment{
    let myMoment: moment.Moment = moment(datetime);
    return myMoment;

  }

  auto_grow(event: any) {
    // for textareas
    let element = event.target;
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }

}
