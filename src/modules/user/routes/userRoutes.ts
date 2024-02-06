import { Router } from "express";
import { userModule } from "../factories/userFactories";

export const userRoutes = Router()

userRoutes.get('/users', userModule.getAll.bind(userModule))