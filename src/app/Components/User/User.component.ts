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
   this.get()
  }


// get all user
get(){
  this.userService.getAllUser().subscribe({
    next:(res)=>{
      this.listUser=res.data
      console.log(this.listUser)
    },error:(err)=>{
      console.log(err)
    }
  })
}





deleteUser(id:string){
  this.userService.deleteUser(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.get()
    },error:(err)=>{
      console.log(err);
    }}
  )
}


  }


