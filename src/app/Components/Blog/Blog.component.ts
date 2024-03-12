import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../Model/IBlog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../Services/Api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.css'],
})
export class BlogComponent {
  // blogId: string
  listBlog: IBlog[] = [];
  Blog!: IBlog;
  form:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private apiServ: ApiServiceService,
    private router: Router,
    private builder :FormBuilder
  ) {
    this.get();

    this.form = this.builder.group({
      title: [''],
      body: [''],
      image: [''],
    });
  }
  // get all blog


  get() {
    this.apiServ.getAllBlog().subscribe({
      next: (res) => {
        console.log(res);
        this.listBlog = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteBlog(id: string) {
    this.apiServ.deleteBlog(id).subscribe({
      next: (res) => {
        console.log(res);

        this.get();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  updateBlog(blogData:any){
    this.Blog=blogData;
    console.log(this.Blog);
    this.form= this.builder.group({
      title: [this.Blog.title,[Validators.required]],
      body: [this.Blog.body,[Validators.required]],
      image: [this.Blog.image,[Validators.required]],
    });
  }

  EditApiBlog(){
    console.log(this.Blog);
    this.apiServ.editBlog(this.Blog._id,this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        alert(res.message);
        this.get();
      },
      error: (err) => {
        console.log(err);
        alert(err);
      },
    });
  }


}
