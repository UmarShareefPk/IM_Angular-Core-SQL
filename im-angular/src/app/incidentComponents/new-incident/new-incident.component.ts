import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { IncidentService } from '../../services/incident.service';
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css'],
})
export class NewIncidentComponent implements OnInit {
  title: string = '';
  assginee: string = '';
  description: string = '';
  addtionalDetails: string = '';
  startDate: string = '';
  dueDate: string = '';
  files: any = [];
  filesText: string = 'Upload files';

  constructor(
    public common: CommonService,
    private incidentService: IncidentService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  assigneeChanged(assignee: any) {
    this.assginee = assignee;
  }

  filesChange(event: any) {
    this.files = event.target.files;
    this.filesText = this.files.length + ' file selected.';
  }

  startDateChanged() {
    if (!this.common.getMoment(this.startDate).isValid()) {
      swal.fire('Invalid Date Start Date.');
      this.startDate = '';
    }
  }
  dueDateChanged() {
    if (!this.common.getMoment(this.dueDate).isValid()) {
      swal.fire('Invalid Date Due Date.');
      this.dueDate = '';
    }
  }

  cancelClicked(){
      this.router.navigate(['/incidents']);
  }

  validate() {
    let error = '';
    this.title = this.title.trim();
    this.description = this.description.trim();
    this.addtionalDetails = this.addtionalDetails.trim();

    if (this.title === '') error = 'Title cannot be empty.';
    else if (this.assginee === '') error = 'Please select assignee.';
    else if (this.description === '') error = 'Description cannot be empty.';
    else if (!this.common.getMoment(this.startDate).isValid()) {
      error = 'Invalid Start Date';
    } else if (!this.common.getMoment(this.dueDate).isValid()) {
      error = 'Invalid Due Date';
    }

    if (error === '') return true;

    swal
      .fire({
        title: 'Invalid',
        text: error,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Okay',
      })
      .then((m) => {});
    return false;
  }

  saveIncident() {
    if (!this.validate()) return;

    const formData = new FormData();

    if (this.files) {
      for (let i = 0; i < this.files.length; i++) {
        formData.append(
          'Attachment' + i + 1,
          this.files[i],
          this.files[i].name
        );
      }
    }
    formData.append('CreatedBy', this.common.getLoggedInUser());
    formData.append('AssignedTo', this.assginee);
    formData.append('Title', this.title);
    formData.append('Description', this.description);
    formData.append('AdditionalDeta', this.addtionalDetails);
    formData.append(
      'StartTime',
      this.common.getMoment(this.startDate).toISOString()
    );
    formData.append(
      'DueDate',
      this.common.getMoment(this.dueDate).toISOString()
    );
    formData.append('Status', 'N');

    this.incidentService.addNewIncident(formData).subscribe(
      (m) => {
        //console.log(m);
        this.finalAction();
      },
      (err) => console.log(err)
    );
  }

  finalAction(){
    swal
    .fire({
      title: 'Incident has been saved.',
      text: 'Do you want to add more incidents?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText:"No"
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/newIncident']);
      }else{
        this.router.navigate(['/incidents']);
      }
    });
  }

}
