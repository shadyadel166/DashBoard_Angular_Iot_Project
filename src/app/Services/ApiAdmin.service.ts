import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAdminLogin } from '../Model/IUser';
import { IResultApi } from './../Model/IResultApi';

@Injectable({
  providedIn: 'root'
})
export class ApiAdminService {
  dataBaseUrl= "http://localhost:5000/users"

constructor(private Http:HttpClient) { }


filter(name:string,address:string){
  return this.Http.get<IResultApi<any>>(this.dataBaseUrl+"?name="+ name)
}

Login(Admin:IAdminLogin){
  return this.Http.post<IResultApi<any>>(this.dataBaseUrl+"/login", Admin)
}
}
