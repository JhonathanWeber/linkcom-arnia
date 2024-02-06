import { User } from "../models/userModel";

export interface IUserRepo{
    getAll(): Promise<Array<User>>
}