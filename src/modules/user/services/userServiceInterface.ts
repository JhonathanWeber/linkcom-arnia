import { User } from "../models/userModel";

export interface IUserService {
    getAll(): Promise<Array<User>>

    getAllDelete(): Promise<Array<User>>

    softDelete(id:string): Promise<User>

    getUserById(id:string): Promise<User>

}