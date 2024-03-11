import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Model/IUser';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent {
  listUser: IUser[] = [];
  User!: IUser;
  form: FormGroup = new FormGroup({});
  constructor(
    private userService: UserService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.get();
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
    console.log(this.updateUser);
    this.form = this.builder.group({
      fullName: [this.User.fullName],
      nationalId: [this.User.nationalId],
      email: [this.User.email],
      phoneNumber: [this.User.phoneNumber],
      address: [this.User.address],
    });
  }
  EditApi() {}
}
