import { Model } from "mongoose";
import { IProductRepo } from "./productRepoInterface";
import { Product } from "../models/productModel";
import { CreateProductDto } from "../dtos/createProductDto";
import { UpdateProductDTO } from "../dtos/updateProductDTO";

export class ProductRepo implements IProductRepo {
  constructor(private productModel: Model<Product>) { }

  async createProduct(productData: CreateProductDto): Promise<Product | null> {
    const newProduct = await this.productModel.create(productData);
    return newProduct;
  }

  async getAll(): Promise<Product[]> {
    const products = await this.productModel.find({ deletedAt: null });
    return products;
  }

  async getProductById(id: string): Promise<Product | null> {
    const product = await this.productModel.findById(id);
    return product;
  }

  async updateProduct(id: string, productData: UpdateProductDTO): Promise<Product | null> {
    const product = await this.productModel.findByIdAndUpdate(id, productData, { new: true });
    return product
  }
}
