import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAdminStore } from '../Model/IUser';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
AdminSubject:BehaviorSubject<IAdminStore|null>
constructor() {
  this.AdminSubject = new BehaviorSubject<IAdminStore|null>(this.GetFromStorage())
  }

GetFromStorage(){
let admin = localStorage.getItem("admin")
if(admin==null||admin==""){
  return null

}else{
return JSON.parse(admin)as IAdminStore
}

}

setStorage(admin:IAdminStore){
  localStorage.setItem("admin",JSON.stringify(admin))
}


newAdmin(admin:IAdminStore){
  this.AdminSubject.next(admin)
  this.setStorage(admin)
}
adminLogout(){
  this.AdminSubject.next(null)
  localStorage.removeItem("admin")
}



}
