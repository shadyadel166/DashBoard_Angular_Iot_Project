export interface IAdminStore {
Name:String,
Email:String,
token:String,
}



// export interface IAdminRegister{
// Name:String,
// Email:String,
// Password:String,
// }

export interface IAdminLogin{
    Email:String,
    Password:String,
}





export interface IUser{
    id:string,
    fullName:string,
    nationalId:number,
    email:string,
    password:string,
  phoneNumber:number,
    address:string,

}