import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NavSideComponent } from "./Components/NavSide/NavSide.component";
import { UserComponent } from "./Components/User/User.component";
import { BlogComponent } from "./Components/Blog/Blog.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { LoginComponent } from "./Components/Login/Login.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SideNavComponent } from "./Components/SideNav/SideNav.component";
import { EditUserComponent } from "./Components/EditUser/EditUser.component";
import { AuthInterceptor } from "./Services/Interceptors/auth.interceptor";
import { ReactiveFormsModule } from '@angular/forms'; 
import { EditBlogComponent } from "./Components/EditBlog/EditBlog.component";





@NgModule({
    declarations:[
        AppComponent,
        NavSideComponent,
        UserComponent,
        BlogComponent,
        LoginComponent,
       SideNavComponent,
       EditBlogComponent,
    
    ],
    imports:[
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule, 

    ],
    bootstrap:[AppComponent],
    providers:[
        {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
        // {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}
    ]
})

export class AppModule{}























   
      
   

    
   
   


