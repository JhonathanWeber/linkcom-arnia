import { Model, isValidObjectId } from "mongoose";
import { User } from "../models/userModel";
import { IUserRepo } from "./userRepoInterface";

export class UserRepo implements IUserRepo{
    constructor(private userModel:Model<User>){}

    async getAll(): Promise<User[]>{
        
        const users = await this.userModel.find({deletedAt: null})
        return users

    }

    async getAllDeleted(): Promise<User[]>{
        // ne: (not exist) extrai os usuarios que estao com o status sem 'null'

        const users = await this.userModel.find({deletedAt: {$ne: null}})
        return users
    }

    async softDelete(id:string): Promise<User|null>{

        if(!isValidObjectId(id)) throw new Error("User not found")
        const deleteUser = await this.userModel.findByIdAndUpdate(id,{deletedAt: new Date()},{new:true})

        return deleteUser
        
    }

    async getUserById(id:string): Promise<User|null>{

        const user = await this.userModel.findById({_id:id})
        return user

    }

    }

