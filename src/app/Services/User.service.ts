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
  return this.Http.get<IResultApi<IUser[]>>(`${this.dataUser}`)
  
}
getUerById(id:string)
{
return this.Http.get<IResultApi<IUser>>(`${this.dataUser}/${id}`)
}

editUser(id:string,data:FormData){
  return this.Http.put<IResultApi<any>>(`${this.dataUser}/${id}`, data)
}
deleteUser(id:string){
  return this.Http.delete<IResultApi<any>>(`${this.dataUser}/${id}`)
}

}