import { User } from "../models/userModel";

export interface IUserRepo{
    getAll(): Promise<Array<User>>
    
    getAllDeleted(): Promise<Array<User>>

    softDelete(id:string): Promise<User|null>

    getUserById(id:string): Promise<User|null>

    restoreUser(id:string): Promise<User|null>

    getUserByEmail(email:string): Promise<User|null>
}

