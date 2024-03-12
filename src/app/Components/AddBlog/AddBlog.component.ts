import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/Api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddBlog',
  templateUrl: './AddBlog.component.html',
  styleUrls: ['./AddBlog.component.css'],
})
export class AddBlogComponent {
  form: FormGroup;
  data: FormData;
  imageLoad:boolean = false;
  constructor(
    private builder: FormBuilder,
    private apiServ: ApiServiceService,
    private router: Router
  ) {
    this.data = new FormData();
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required, Validators.minLength(30)]],
    });
  }

  chooseImage(imgInput: any) {
    this.data.append('image', imgInput.files[0]);
    this.imageLoad = true;
  }

  send() {
      for (let key in this.form.value) {
        this.data.append(key, this.form.controls[key].value);
      }
      console.log(this.data.get('image'));
      console.log(this.data.get('title'));
      console.log(this.data.get('body'));
      console.log('done send');

   
    this.apiServ.addBlog(this.data).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == 200) {
          alert('Blog Added');
          this.form.reset();
          this.data = new FormData();
        //   this.router.navigate(['/blog']);
        this.router.navigateByUrl("/blog")    
    } else {
          alert('something wrong');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
