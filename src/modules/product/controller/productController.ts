import { Request, Response } from "express";
import { IProductService } from "../services/productServiceInterface";
import { IProductController } from "./productControllerInterface";
import { createProductValidator } from "../utils/createProductValidator";

export class ProductController implements IProductController {
  constructor(private productService: IProductService) { }

  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      await createProductValidator.validate(body, { abortEarly: true });
      const newProduct = await this.productService.createProduct(body);
      res.status(201).json(newProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productService.getAll();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await this.productService.getProductById(id);
      res.status(200).json(product);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const { body } = req;
      const newProduct = await this.productService.updateProduct(id, body)
      res.status(200).json(newProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
