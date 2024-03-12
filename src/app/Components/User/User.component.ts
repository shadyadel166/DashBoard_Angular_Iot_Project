import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Model/IUser';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent {
  listUser: IUser[] = [];
  User!: IUser;
  form: FormGroup ;
  constructor(
    private userService: UserService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.get();
    this.form = this.builder.group({
      fullName: [""],
      nationalId: [""],
      email: [""],
      phoneNumber: [""],
      address: [""],})
  }

  // get all user
  get() {
    this.userService.getAllUser().subscribe({
      next: (res) => {
        this.listUser = res.data;
        console.log(this.listUser);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        console.log(res);
        this.get();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateUser(current: any) {
    this.User = current;
    console.log(this.User);
    this.form = this.builder.group({
      fullName: [this.User.fullName,[Validators.required]],
      nationalId: [this.User.nationalId,[Validators.required]],
      email: [this.User.email,[Validators.required]],
      phoneNumber: [this.User.phoneNumber,[Validators.required]],
      address: [this.User.address,[Validators.required]],
    });
  }
  EditApi() {
    this.userService.editUser(this.User._id, this.form.value).subscribe({
      next: (res) => {
        alert(res.message);
        this.get();
      },
      error: (err) => {
        alert(err);

      },
    })
  }
}
