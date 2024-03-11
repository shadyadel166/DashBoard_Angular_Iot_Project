import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAdminStore } from '../../Model/IUser';
import { AuthServiceService } from '../../Services/Auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../Services/Api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-SideNav',
  templateUrl: './SideNav.component.html',
  styleUrls: ['./SideNav.component.css'],
})
export class SideNavComponent {
  loginAdmin: IAdminStore | null = null;

  // add blog
  form: FormGroup;
  data: FormData;

  constructor(
    private auth: AuthServiceService,
    private apiServ: ApiServiceService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.auth.AdminSubject.subscribe((data) => {
      this.loginAdmin = data;
    });

    // start add blog
    this.data = new FormData();
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      image: ['', [Validators.required]],
    });
  }

  // add blog function
  chooseImage(imgInput: any) {
    this.data.append('image', imgInput.target.files[0]);
  }

  send() {
    console.log('done send');
    console.log(this.form.value);

    for (let key in this.form.value) {
      this.data.append(key, this.form.value[key].value);
    }
    console.log(this.data);
    this.apiServ.addBlog(this.data).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == 200) {
          alert('Blog Added');
          this.form.reset();
          this.data = new FormData();
          this.router.navigate(['/blog']);
        } else {
          alert('something wrong');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  // logout admin
  logOut() {
    this.auth.adminLogout();
  }


// sidenav button
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
