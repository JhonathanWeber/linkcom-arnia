import { Model } from "mongoose";
import { User } from "../../user/models/userModel";
import { LoginDTO } from "../dtos/loginDTOS";
import { IAuthRepo } from "./authRepoInterface";
import { RegisterUserDTO } from "../dtos/registerUserDTO";

export class AuthRepo implements IAuthRepo {
  constructor(private userModule: Model<User>) { }

  async login(loginData: LoginDTO): Promise<User | null> {
    const { email } = loginData
    const user = await this.userModule.findOne({ email }).select("+password")
    return user
  }

  async registerUser(userData: RegisterUserDTO): Promise<User | null> {
    const newUser = await this.userModule.create(userData)
    return newUser;

  }

}
