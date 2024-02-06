import { Request, Response } from "express"



export interface IUserController {
    getAll(req: Request, res: Response): Promise<void>
}