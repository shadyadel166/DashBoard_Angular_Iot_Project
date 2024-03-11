import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../Model/IBlog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../Services/Api.service';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blog.component.html',
  styleUrls: ['./Blog.component.css'],
})
export class BlogComponent {
  // blogId: string
  listBlog: IBlog[] = [];
  constructor(
    private route: ActivatedRoute,
    private apiServ: ApiServiceService,
    private router: Router
  ) {
    this.get();
  }
  // get all blog

  // delete
  //   this.blogId = this.route.snapshot.paramMap.get('id') ?? '';
  //   if (this.blogId) {
  //     this.deleteBlog(this.blogId);
  //   }
  // }

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
}
