import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../Model/IBlog';
import { ApiServiceService } from '../../Services/Api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.css'],
})
export class BlogComponent {
  listBlog: IBlog[] = [];
  selectedBlog: IBlog  = {image:"",title:"",body:"",_id:"",countLike:0,date:"",comment:"",}
  form: FormGroup;
data:FormData=new FormData();
  constructor(
    private apiServ: ApiServiceService,
    private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      title: [''],
      body: [''],
      image: [''],
    });
    this.get();
  }
 
  get() {
    this.apiServ.getAllBlog().subscribe({
      next: (res) => {
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
        this.get();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editBlog(blog: any) {
    this.selectedBlog = blog;
    console.log(this.selectedBlog);
    this.form=this.builder.group({
      title: [this.selectedBlog.title,[Validators.required]],
      body:[ this.selectedBlog.body,[Validators.required]],
    
    });
  }

chooseImage(image: any) {
  this.data.append('image', image.files[0]);
}

  submitEdit() {
    for (const key in this.form.controls) {
      this.data.append(key,this.form.controls[key].value);
    }
      this.apiServ.editBlog(this.selectedBlog._id, this.data).subscribe({
        next: (res) => {
          alert(res.message);
          this.get();
          this.form.reset();
        
        },
        error: (err) => {
          console.log(err);
          alert('Error occurred while editing the blog.');
        },
      });
      this.form.reset();
      this.data = new FormData();
    }
  }

