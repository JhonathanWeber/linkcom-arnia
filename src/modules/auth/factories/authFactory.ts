import { AuthController } from './../controllers/authController';
import { UserModel } from "../../user/models/userModel";
import { AuthRepo } from "../repo/authRepo";
import { AuthService } from "../services/authService";

class AuthFactury {
    static getInstance(){
        const authRepo = new AuthRepo(UserModel)
        const authService = new AuthService(authRepo)
        const authController = new AuthController(authService)

        return authController
    }
}

export const authModule = AuthFactury.getInstance();