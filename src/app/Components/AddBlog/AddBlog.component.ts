// import { Component, OnInit } from '@angular/core';
// import { ApiServiceService } from '../../Services/Api.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-AddBlog',
//   templateUrl: './AddBlog.component.html',
//   styleUrls: ['./AddBlog.component.css'],
// })
// export class AddBlogComponent {
//   form: FormGroup;
//   data: FormData;
//   constructor(
//     private builder: FormBuilder,
//     private apiServ: ApiServiceService,
//     private router: Router
//   ) {
//     this.data = new FormData();
//     this.form = this.builder.group({
//       title: ['', [Validators.required]],
//       description: ['', [Validators.required, Validators.minLength(30)]],
//       image: ['', [Validators.required]],
//     });
//   }

//   chooseImage(imgInput: any) {
//     this.data.append('image', imgInput.target.files[0]);
//   }

//   send() {
//     console.log('done send');
//     console.log(this.form.value);

//     for (let key in this.form.value) {
//       this.data.append(key, this.form.value[key].value);
//     }
//     console.log(this.data);
//     this.apiServ.addBlog(this.data).subscribe({
//       next: (res) => {
//         console.log(res);
//         if (res.status == 200) {
//           alert('Blog Added');
//           this.form.reset();
//           this.data = new FormData();
//           this.router.navigate(['/blog']);
//         } else {
//           alert('something wrong');
//         }
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }
// }
