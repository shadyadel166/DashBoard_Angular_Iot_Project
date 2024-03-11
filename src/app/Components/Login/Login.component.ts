import { Component, OnInit } from '@angular/core';
import { IAdminLogin, IAdminStore } from '../../Model/IUser';
import { Router } from '@angular/router';
import { ApiAdminService } from './../../Services/ApiAdmin.service';
import { AuthServiceService } from '../../Services/Auth.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent  {
  adminLog:IAdminLogin
  constructor(private router:Router,private ApiServeAdmin:ApiAdminService,private Auth:AuthServiceService) 
  {

    this.adminLog={Email:'',Password:''};

   }


   send(){
     this.ApiServeAdmin.Login(this.adminLog).subscribe({
       next:(res)=>{
         if(res.status==200){
         console.log(res)
       let data:IAdminStore={
         token:res.data.token,
         Email:res.data.email,
         Name:res.data.name,

       }  
       this.Auth.newAdmin(data);
       this.router.navigate(['/']);
       }else{
         alert(res.message)
       }
       }
     })
   }
  

}
