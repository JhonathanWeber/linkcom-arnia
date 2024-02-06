import { User } from "../models/userModel";
import { IUserRepo } from "../repos/userRepoInterface";
import { IUserService } from "./userServiceInterface";

//regra de negocio 
export class UserService implements IUserService {
    constructor(private userRepo:IUserRepo){}

    async getAll():Promise<User[]>{
        const users = await this.userRepo.getAll() 

        if(!users || users.length === 0 ){
            throw new Error('User not found')
        
        }
        return users 

    }


}