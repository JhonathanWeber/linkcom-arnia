import { Request, Response } from "express";
import { IUserController } from "./userControllerInterface";
import { IUserService } from "../services/userServiceInterface";

export class UserController implements IUserController {
  constructor(private userService: IUserService) {}

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllDelete(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllDelete();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async softDelete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleteUser = await this.userService.softDelete(id);
      res.status(200).json(deleteUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async restoreUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.userService.restoreUser(id);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserByEmail(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params;
      const user = await this.userService.getUserByEmail(email);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { body } = req;
      const updadeUser = await this.userService.updateUser(id, body);

      res.status(200).json(updadeUser);
    } catch (error: any) {
      res.status(500).json({ message: error });
    }
  }

  async addGems(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { addGems } = req.body;
      const userGems = await this.userService.addGems(id, addGems);

      res.status(200).json(userGems);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  async subtractGems(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { subtractGems } = req.body;
      const userGems = await this.userService.subtractGems(id, subtractGems);

      res.status(200).json(userGems);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
