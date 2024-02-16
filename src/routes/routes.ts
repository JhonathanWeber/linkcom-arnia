import { Router } from "express";
import { authRoutes } from "../modules/auth/routes/authRoutes";
import { userRoutes } from "../modules/user/routes/userRoutes";
import { productRoutes } from "../modules/product/routes/productRoutes";
import { redeemProductRoutes } from "../modules/redeem/routes/redeemRoutes";

export const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(productRoutes);
routes.use(redeemProductRoutes)

routes.get("/", (req, res) => {
  res.send("home");
});
