import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Model/IUser';
import { UserService } from '../../Services/User.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-EditUser',
  templateUrl: './EditUser.component.html',
  styleUrls: ['./EditUser.component.css']
})
export class EditUserComponent implements OnInit {

  user!: IUser; // Definite assignment assertion operator

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUerById(userId).subscribe({
      next: (res) => {
        this.user = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateUser() {
    const formData = new FormData();
    formData.append('fullName', this.user.fullName);
    formData.append('nationalId', this.user.nationalId.toString());
    formData.append('email', this.user.email);
    formData.append('phoneNumber', this.user.phoneNumber.toString());
    formData.append('address', this.user.address);
  
    this.userService.editUser(this.user.id, formData).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/user']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
}