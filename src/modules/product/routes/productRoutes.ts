import { Router } from "express";
import { ProductModel } from "../models/productModel";
import { productModule } from "../factories/productFactories";
import { Authentication } from "../../../middlewares/authenticationMiddleware";
import { Authorization } from "../../../middlewares/authorizationMiddleware";

export const productRoutes = Router();

productRoutes.post(
  "/create-product", Authentication.handler, Authorization.handlerAdmin,
  productModule.createProduct.bind(productModule)
);

productRoutes.get("/products", Authentication.handler, productModule.getAll.bind(productModule));
productRoutes.get(
  "/product/:id", Authentication.handler,
  productModule.getProductById.bind(productModule)
);
