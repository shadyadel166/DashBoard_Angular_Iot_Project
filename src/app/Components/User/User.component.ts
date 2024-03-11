import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Model/IUser';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User.service';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent {
  listUser:IUser[]=[]
  constructor(
    private userService:UserService ,
    private router: Router
  ) 
  { 
    this.userService.getAllUser().subscribe({
      next:(res)=>{
        console.log(res)
       this.listUser=res.data
      },error:(err)=>{
        console.log(err)
      }
    })
  }


// get all user





deleteUser(id:string){
  this.userService.deleteUser(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.router.navigate(['/user']); 
    },error:(err)=>{
      console.log(err);
    }}
  )
}


  }


