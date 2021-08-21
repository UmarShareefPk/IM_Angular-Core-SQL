import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import swal from 'sweetalert2'
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  files: any = [];
  filesText: string = 'Upload profile picture.';

  constructor(
    public common: CommonService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}



  filesChange(event: any) {
    this.files = event.target.files;
    this.filesText = this.files.length + ' file selected.';
  }

  cancelClicked(){
    this.router.navigate(['/users']);
}

  validate() {
    let error = '';
    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();
    this.email = this.email.trim();

    if (this.firstName === '') error = 'First Name cannot be empty.';
    else if (this.lastName === '') error = 'Last Name cannot be empty.';
    else if (this.email === '') error = 'Email cannot be empty.';

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

  saveUser() {
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

    formData.append("FirstName", this.firstName);
    formData.append("LastName", this.lastName);
    formData.append("Email", this.email);
    formData.append("Phone", this.phone);

    this.userService.addNewUser(formData).subscribe(
      (m) => {
        this.finalAction();
      },
      (err) => console.log(err)
    );
  }

  finalAction(){
    swal
    .fire({
      title: 'User has been saved.',
      text: 'Do you want to add more users?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText:"No"
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/newUser']);
      }else{
        this.router.navigate(['/users']);
      }
    });
  }
}
