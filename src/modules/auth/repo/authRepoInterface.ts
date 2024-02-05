import { User } from "../../user/models/userModel";
import { LoginDTO } from "../dtos/loginDTOS";
import { RegisterUserDTO } from "../dtos/registerUserDTO";


export interface IAuthRepo{
    login(loginData:LoginDTO):Promise<User | null>
    registerUser(userData:RegisterUserDTO):Promise<User | null>
}
