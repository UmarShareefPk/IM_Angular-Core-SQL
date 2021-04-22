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
    return user.FirstName + " " + user.LastName;
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

}
