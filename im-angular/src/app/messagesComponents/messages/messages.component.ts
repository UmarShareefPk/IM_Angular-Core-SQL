import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { CommonService } from '../../services/common.service';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService:MessagesService, private common:CommonService) { }

  ngOnInit(): void {
    this.messageService.getconversationsByUser(this.common.getLoggedInUser())
    .pipe(map(m => { return m}))
    .subscribe((m:any)=>{
        console.log(m[0].Id);
        this.messageService.getmessagesByConversation(m[0].Id)
        .pipe(map(m => { return m}))
        .subscribe((m:any)=>{
            console.log(m);
            
        });
    });
  }

}
