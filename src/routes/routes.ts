import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";


export const routes = Router()


routes.get('/',AuthMiddleware.handler, (req,res) => {
    res.send("home")
})
