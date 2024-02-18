import { Request, Response } from "express";

export interface IProductController {
  createProduct(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
  getProductById(req: Request, res: Response): Promise<void>;
  updateProduct(req: Request, res: Response): Promise<void>;
}
