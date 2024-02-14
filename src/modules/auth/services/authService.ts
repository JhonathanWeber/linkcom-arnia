import  jwt  from 'jsonwebtoken';
import { User } from "../../user/models/userModel";
import { LoginDTO } from "../dtos/loginDTOS";
import { IAuthRepo } from "../repo/authRepoInterface";
import { IAuthService } from "./authServiceInterface";
import bcrypt from "bcrypt"
import "dotenv/config"
import { RegisterUserDTO } from '../dtos/registerUserDTO';


export class AuthService implements IAuthService {
    constructor(private authRepo: IAuthRepo){}

    async login(loginData: LoginDTO): Promise<{user:User,token:string}| null> {
        const user = await this.authRepo.login(loginData)
        
        
        if(!user || !user.password) throw new Error('Invailed email')

        const userPassword = user.password
        const isPasswordValid = await bcrypt.compare(loginData.password, userPassword)

        if(!isPasswordValid) throw new Error('Invalid Password')

        const payload = {...user}
        const secret = process.env.JWT_SECRET as string
        const option = {expiresIn:'1d'}
        const token = await jwt.sign(payload,secret,option)
        return {user,token}
    }
    async registerUser(newData:RegisterUserDTO): Promise<User>{
        newData.password = await bcrypt.hash(newData.password,10)
        

        const newUser = await this.authRepo.registerUser(newData)

        if(!newUser) throw new Error('Invalid User')

        return newUser
    }
    async loginAdmin(loginData: LoginDTO): Promise<{user:User,token:string}| null> {
        const user = await this.authRepo.loginAdmin(loginData)

        if(!user || !user.password) throw new Error('Invailed email')
       
        
        if(user.typeUser !== 'admin') throw new Error('user not admin')
        

        const userPassword = user.password
        const isPasswordValid = await bcrypt.compare(loginData.password, userPassword)

        if(!isPasswordValid) throw new Error('Invalid Password')

        const payload = {...user}
        const secret = process.env.JWT_SECRET as string
        const option = {expiresIn:'1d'}
        const token =  jwt.sign(payload,secret,option)
        return {user,token}
    }
}
