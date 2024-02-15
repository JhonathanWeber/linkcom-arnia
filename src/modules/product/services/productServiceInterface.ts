import { CreateProductDto } from "../dtos/createProductDto";
import { Product } from "../models/productModel";

export interface IProductService {
  createProduct(productData: CreateProductDto): Promise<Product>;
  getAll(): Promise<Array<Product>>;
  getProductById(id: string): Promise<Product>;
}
