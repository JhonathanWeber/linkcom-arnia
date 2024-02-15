import { ProductModel } from "../models/productModel";
import { ProductController } from "./../controller/productController";
import { ProductService } from "./../services/productService";
import { ProductRepo } from "./../repos/productRepo";

class ProductFactory {
  static getInstance() {
    const productRepo = new ProductRepo(ProductModel);
    const productService = new ProductService(productRepo);
    const productController = new ProductController(productService);

    return productController;
  }
}
export const productModule = ProductFactory.getInstance();
