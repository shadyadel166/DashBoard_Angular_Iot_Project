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
    email:String,
    password:String,
}





export interface IUser{
    _id:string,
    fullName:string,
    nationalId:number,
    email:string,
    password:string,
  phoneNumber:number,
    address:string,

}

