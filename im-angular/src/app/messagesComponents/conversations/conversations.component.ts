import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  conversations:any[] = [];

  constructor(private messageService:MessagesService, public common:CommonService) { }


  ngOnInit(): void {
    this.messageService.getconversationsByUser(this.common.getLoggedInUser())
    .pipe(map(m => { return m}))
    .subscribe((m:any)=>{
        console.log(m[0].Id);
        this.conversations = m;       
    });
  }

  getUserToDisplay(conversation:any):string {
    let user = conversation.User1 == this.common.getLoggedInUser() ? conversation.User2 : conversation.User1;
    return this.common.getUserNameById(user)
  }

  getUserInitials(conversation:any):string {
    let user = conversation.User1 == this.common.getLoggedInUser() ? conversation.User2 : conversation.User1;
    return this.common.getUserNameById(user).toUpperCase().split(/\s/).reduce((response:any, word:any) => response += word.slice(0, 1), '');
  }

}
