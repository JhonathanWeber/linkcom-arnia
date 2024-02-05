import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { authRoutes } from "../modules/auth/routes/authRoutes";


export const routes = Router()

routes.use(authRoutes)
routes.get('/',AuthMiddleware.handler, (req,res) => {
    res.send("home")
})
