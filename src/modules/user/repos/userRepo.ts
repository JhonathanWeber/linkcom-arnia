import { Model } from "mongoose";
import { User } from "../models/userModel";
import { IUserRepo } from "./userRepoInterface";

export class UserRepo implements IUserRepo{
    constructor(private userModel:Model<User>){}

    async getAll(): Promise<User[]>{
        
        const users = await this.userModel.find({deletedAt: null})
        return users

    }

}