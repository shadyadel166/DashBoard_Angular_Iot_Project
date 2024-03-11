import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../Services/Api.service';

@Component({
  selector: 'app-EditBlog',
  templateUrl: './EditBlog.component.html',
  styleUrls: ['./EditBlog.component.css']
})
export class EditBlogComponent implements OnInit {

  blogId: string | null = null;
  editBlogForm: FormGroup;
  data: FormData;

  constructor(
    private route: ActivatedRoute,
    private apiServ: ApiServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.data = new FormData();
    this.editBlogForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(30)]],
      image: [''] 
    });
  }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id') ?? null;
    if (this.blogId) {
      this.getBlogDetails();
    }
  }

  getBlogDetails() {
    this.apiServ.getBlogById(this.blogId!).subscribe(
      (result) => {
        const blog = result.data;
        this.editBlogForm.patchValue({
          title: blog.title,
          description: blog.body
        });
      },
      (error) => {
        console.log('Error fetching blog details:', error);
      }
    );
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editBlogForm.get('image')?.setValue(file);
    }
  }

  onSubmit() {
    if (this.editBlogForm.invalid) {
      return;
    }

    const formData = new FormData();
    for (let key in this.editBlogForm.value) {
      formData.append(key, this.editBlogForm.value[key]);
    }

    this.apiServ.editBlog(this.blogId!, formData).subscribe(
      (res) => {
        console.log('Blog updated successfully:', res);
        this.router.navigate(['/blog']); 
      },
      (error) => {
        console.log('Error updating blog:', error);
      }
    );
  }

}