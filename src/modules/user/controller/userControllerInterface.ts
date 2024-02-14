import { UpdateUserDto } from "./../dtos/updateUserDto";
import { Request, Response } from "express";

export interface IUserController {
  getAll(req: Request, res: Response): Promise<void>;
  getAllDelete(req: Request, res: Response): Promise<void>;
  getUserById(req: Request, res: Response): Promise<void>;
  softDelete(req: Request, res: Response): Promise<void>;
  restoreUser(req: Request, res: Response): Promise<void>;
  getUserByEmail(req: Request, res: Response): Promise<void>;
  updateUser(req: Request, res: Response): Promise<void>;
  addGems(req: Request, res: Response): Promise<void>;
  subtractGems(req: Request, res: Response): Promise<void>;
}
