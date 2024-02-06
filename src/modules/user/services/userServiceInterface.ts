import { User } from "../models/userModel";

export interface IUserService {
    getAll(): Promise<Array<User>>
}