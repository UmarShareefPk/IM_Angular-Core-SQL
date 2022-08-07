import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class Apis {
  //baseUrl : string = "https://localhost:44310/";
  baseUrl : string = "https://imwebapicore.azurewebsites.net/";

  authenticateUrl : string;
  allUsersUrl :string;
  userssWithPageUrl : string;
  addNewUserUrl : string;
  updateHubIdUrl :string;
  allNotificationsUrl :  string;
  setNotificationStatusUrl :string;

  incidentsWithPageUrl : string ;
  addNewIncidentUrl : string ;
  addNewCommentUrl : string ;
  deleteCommentUrl : string;
  updateIncidentUrl :string ;
  updateCommentUrl : string ;
  getIncidentByIdUrl : string ;
  deleteAttachmentUrl : string ;
  downloadFileUrl :string;

  kpiUrl:string;
  overallWidgetUrl:string;
  last5IncidentsUrl:string;
  oldest5UnresolvedIncidentsUrl:string;
  mostAssignedToUsersIncidentsUrl:string;

  messagesByUserUrl:string;
  sendMessageUrl:string;
  conversationsByUserUrl:string;
  messagesByConversationsUrl:string;
  deleteConversationUrl:string;
  deleteMessageUrl:string;
  changeMessageStatusUrl:string;

  constructor() {
    this.authenticateUrl =  this.baseUrl + "api/Users/authenticate";
    this.allUsersUrl = this.baseUrl + "api/users/AllUsers";
    this.userssWithPageUrl = this.baseUrl + "api/Users/GetUsersWithPage?";
    this.addNewUserUrl = this.baseUrl + "api/Users/AddUser";
    this.updateHubIdUrl = this.baseUrl + "api/Users/UpdateHubId";
    this.allNotificationsUrl =  this.baseUrl + "api/Users/UserNotifications";
    this.setNotificationStatusUrl = this.baseUrl + "api/Users/UpdateIsRead";

    this.incidentsWithPageUrl =  this.baseUrl  + "api/Incidents/GetIncidentsWithPage?";
    this.addNewIncidentUrl =  this.baseUrl  + "api/Incidents/AddIncident";
    this.addNewCommentUrl =  this.baseUrl  + "api/Incidents/AddComment";
    this.deleteCommentUrl  =  this.baseUrl + "api/Incidents/DeleteComment?";
    this.updateIncidentUrl =  this.baseUrl  + "api/Incidents/UpdateIncident";
    this.updateCommentUrl =  this.baseUrl  + "api/Incidents/UpdateComment";
    this.getIncidentByIdUrl =  this.baseUrl  + "api/Incidents/IncidentById?Id=";
    this.deleteAttachmentUrl =  this.baseUrl  + "api/Incidents/DeleteFile?";
    this.downloadFileUrl =  this.baseUrl  + "api/Incidents/DownloadFile?";

    this.kpiUrl = this.baseUrl + "api/Incidents/KPI?userId=";
    this.overallWidgetUrl = this.baseUrl + "api/Incidents/OverallWidget";
    this.last5IncidentsUrl = this.baseUrl + "api/Incidents/Last5Incidents";
    this.oldest5UnresolvedIncidentsUrl = this.baseUrl + "api/Incidents/Oldest5UnresolvedIncidents?";
    this.mostAssignedToUsersIncidentsUrl = this.baseUrl + "api/Incidents/MostAssignedToUsersIncidents";
 
    this.messagesByUserUrl= this.baseUrl + "api/Messages/MessagesByUser?UserId=";
    this.sendMessageUrl= this.baseUrl + "api/Messages/AddMessage";
    this.conversationsByUserUrl= this.baseUrl + "api/Messages/ConversationsByUser?UserId=";
    this.messagesByConversationsUrl= this.baseUrl + "api/Messages/MessagesByConversations?ConversationId=";
    this.deleteConversationUrl= this.baseUrl + "api/Messages/DeleteConversation?ConversationId=";
    this.deleteMessageUrl= this.baseUrl + "api/Messages/DeleteMessage?MessageId=";
    this.changeMessageStatusUrl= this.baseUrl + "api/Messages/ChangeMessageStatus?MessageId=";

  }
}
