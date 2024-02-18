import { User } from "../../user/models/userModel";
import { LoginDTO } from "../dtos/loginDTOS";
import { RegisterUserDTO } from "../dtos/registerUserDTO";


export interface IAuthService {
    login(loginData: LoginDTO): Promise<{ user: User, token: string } | null>
    registerUser(newUser: RegisterUserDTO): Promise<User>

    loggedUser(token: string): Promise<User | null>

}