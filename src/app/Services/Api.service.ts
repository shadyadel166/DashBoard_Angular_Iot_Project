import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResultApi } from '../Model/IResultApi';
import { IBlog } from '../Model/IBlog';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
dataBaseUrl="http://localhost:5000/blog"
constructor(private Http:HttpClient) { }


getAllBlog(){
  return this.Http.get<IResultApi<IBlog[]>>(this.dataBaseUrl+"/allBlog")
}
getBlogById(id:string)
{
  return this.Http.get<IResultApi<IBlog>>(this.dataBaseUrl+"/allBlog/"+id)
}

addBlog(data:FormData){
  return this.Http.post<IResultApi<any>>(this.dataBaseUrl+"/addBlog",data)
}

editBlog(id:string,data:FormData){

  return this.Http.put<IResultApi<any>>(this.dataBaseUrl+"/editBlog/"+id, data)
}

deleteBlog(id:string){
  return this.Http.delete<IResultApi<any>>(this.dataBaseUrl+"/deleteBlog/"+id)
}

getBlogBytitle(title:string){
  return this.Http.get<IResultApi<any>>(this.dataBaseUrl+"//getBlogByTitle/"+title)
}

}
