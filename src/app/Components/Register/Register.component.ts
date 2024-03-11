import { Component, OnInit } from '@angular/core';
import { IAdminRegister } from '../../Model/IUser';
import { AuthServiceService } from '../../Services/Auth.service';
import { Router } from '@angular/router';
import { ApiAdminService } from '../../Services/ApiAdmin.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent  {
admin:IAdminRegister
  constructor(private auth:ApiAdminService,private router:Router) { 

this.admin={
  Name:"",
  Password:"",
  Email:"",

}

  }

  sendReg(){
    this.auth.Register(this.admin).subscribe({
      next:(res)=>{
        if (res.success==true){
          this.router.navigate(['/login']);
        }else{
          alert(res.message)
        }
          
        }
      })
    
  }
 

}
