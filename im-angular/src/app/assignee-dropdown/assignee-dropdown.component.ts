import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-assignee-dropdown',
  templateUrl: './assignee-dropdown.component.html',
  styleUrls: ['./assignee-dropdown.component.css']
})
export class AssigneeDropdownComponent implements OnInit {

  constructor(public common:CommonService) { }

  @Input() selectedAssignee:string = "";
  @Input() width:string = "w-100";
  @Output() assigneeChanged: EventEmitter<string> = new EventEmitter();

  allAssignees:any[] = [];
  assingeeList:any[] = [];

  ngOnInit(): void {
    this.allAssignees = this.common.getAllUsers();
    this.assingeeList = this.allAssignees;
  }

  assigneeSelected(id:string){
    this.selectedAssignee = id;
    this.assigneeChanged.emit(id);
  }

  assigneeSearch(event:any){
    let search = event.target.value;
    let newList = [];
    if (search !== "") {
        newList = this.allAssignees.filter((assignee) => {
            return (
                assignee.FirstName.toUpperCase().startsWith( search.toUpperCase() )
                ||
                assignee.LastName.toUpperCase().startsWith(search.toUpperCase())
              );
        });
    }

    if (newList !== undefined && newList.length !== 0) {
        //check if there is atlease one assignee
        newList = newList.concat([]);
    } else {
        //if search found nothing, show all assignees
        newList = this.allAssignees.slice();
    }

    this.assingeeList = newList;
  }

}
