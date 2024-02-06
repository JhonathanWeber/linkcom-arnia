import { UserController } from './../controller/userController';
import { UserModel } from "../models/userModel";
import { UserRepo } from "../repos/userRepo";
import { UserService } from "../services/userService";

class UserFactory{
    static getInstance(){
        const userRepo = new UserRepo(UserModel)
        const userService = new UserService(userRepo)
        const userController = new UserController(userService)

        return userController

        }
}

export const userModule = UserFactory.getInstance();