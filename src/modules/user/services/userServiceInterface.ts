import { User } from "../models/userModel";

export interface IUserService {
    getAll(): Promise<Array<User>>

    getAllDelete(): Promise<Array<User>>

    softDelete(id:string): Promise<User>

    getUserById(id:string): Promise<User>

    restoreUser(id:string): Promise<User>

    getUserByEmail(email:string): Promise<User>


}