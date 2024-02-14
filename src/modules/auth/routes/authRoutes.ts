import { Router } from "express";
import { authModule } from "../factories/authFactory";

export const authRoutes = Router()

authRoutes.post('/login', authModule.login.bind(authModule))
authRoutes.post('/register', authModule.registerUser.bind(authModule))
authRoutes.post('/loginAdmin', authModule.loginAdmin.bind(authModule))
