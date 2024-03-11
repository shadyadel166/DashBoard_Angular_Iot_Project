import { Component, OnInit } from '@angular/core';
import { FackBlogService } from './../../Services/FackBlog.service';
import { Blog, IBlog } from '../../Model/IBlog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../Services/Api.service';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.css'],
})
export class BlogComponent implements OnInit {
  // blogServ: Blog[];
  blogId: string 
listBlog:IBlog[]=[]
  constructor(
    // private _blogServ: FackBlogService,
    private route: ActivatedRoute,
   private apiServ: ApiServiceService,
   private router: Router
  ) {
    // this.blogServ = _blogServ.blogs;
// get all blog
this.apiServ.getAllBlog().subscribe({
  next:(res)=>{
    console.log(res);
    this.listBlog=res.data;
  },error:(err)=>{
    console.log(err);
  }
})
     // delete
    this.blogId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.blogId) {
      this.deleteBlog(this.blogId);
    }
  }

deleteBlog(blogId:string){
  this.apiServ.deleteBlog(this.blogId).subscribe({
    next:(res)=>{
      console.log(res);
      this.router.navigate(['/blog']);  

    },error:(err)=>{
      console.log(err);
    }
    }
  )
    
}

  ngOnInit() {}
}


