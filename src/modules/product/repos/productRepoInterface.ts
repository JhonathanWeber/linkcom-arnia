import { CreateProductDto } from "../dtos/createProductDto";
import { Product } from "../models/productModel";

export interface IProductRepo {
  createProduct(productData: CreateProductDto): Promise<Product | null>;
  getAll(): Promise<Array<Product>>;
  getProductById(id: string): Promise<Product | null>;
}
