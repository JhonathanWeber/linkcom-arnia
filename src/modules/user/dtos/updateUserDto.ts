
export class UpdateUserDto{
    name?:string;
    email?:string;
    password?:string;

    constructor(userData:UpdateUser){
        this.name = userData.name;
        this.email = userData.email;
        this.password = userData.password;
        
    }
 
}
type UpdateUser = {
    name?:string;
    email?:string;
    password?:string;

}