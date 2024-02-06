import { Request, Response } from "express";
import { IUserController } from "./userControllerInterface";
import { IUserService } from "../services/userServiceInterface";


export class UserController implements IUserController{
    constructor(private userService: IUserService){}

    async getAll(req: Request, res: Response): Promise<void>{
        try {
            const users = await this.userService.getAll()
            res.status(200).json(users)
            
        } catch (error : any) {
            res.status(500).json({message: error.message})
            
        }
    }
}