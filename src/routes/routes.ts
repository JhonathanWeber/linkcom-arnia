import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { authRoutes } from "../modules/auth/routes/authRoutes";
import { userRoutes } from "../modules/user/routes/userRoutes";


export const routes = Router()

routes.use(authRoutes)
routes.use(userRoutes)
routes.get('/',AuthMiddleware.handler, (req,res) => {
    res.send("home")
})