import { CreateProductDto } from "../dtos/createProductDto";
import { UpdateProductDTO } from "../dtos/updateProductDTO";
import { Product } from "../models/productModel";

export interface IProductRepo {
  createProduct(productData: CreateProductDto): Promise<Product | null>;
  getAll(): Promise<Array<Product>>;
  getProductById(id: string): Promise<Product | null>;
  updateProduct(id: string, productData: UpdateProductDTO): Promise<Product | null>;
}
