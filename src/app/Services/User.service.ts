import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResultApi } from '../Model/IResultApi';
import { IUser } from '../Model/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 dataUser="http://localhost:5000/users"
constructor(private Http:HttpClient) { }

getAllUser(){
  return this.Http.get<IResultApi<IUser[]>>(`${this.dataUser}/getAll`)
  
}
getUerById(id:string)
{
return this.Http.get<IResultApi<IUser>>(`${this.dataUser}/getById/${id}`)
}

editUser(id:string,data:any){
  return this.Http.put<IResultApi<IUser>>(`${this.dataUser}/update/${id}`, data)
}
deleteUser(id:string){
  return this.Http.delete<IResultApi<any>>(`${this.dataUser}/delete/${id}`)
}

}
