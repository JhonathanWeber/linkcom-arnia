import { Request, Response } from "express";
import { IAuthService } from "../services/authServiceInterface";
import { loginValidator } from "../utils/loginValidator";
import { IAuthController } from "./authControllerInterface";
import { registerUserValidator } from "../utils/registerUserValidator";



declare global {
    namespace Express {
        interface Request {
            user: Object // Defina a propriedade userType opcional no objeto de solicitação
        }
    }
}


export class AuthController implements IAuthController {
    constructor(private authService: IAuthService) { }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body
            await loginValidator.validate({ email: email, password: password }, { abortEarly: true })
            const userData = await this.authService.login({ email: email, password: password })
            req.user = { ...userData }
            res.status(200).json({ user: userData?.user, token: userData?.token })
        } catch (error: any) {
            res.status(500).json({ error: error.message });

        }
    }

    async registerUser(req: Request, res: Response): Promise<void> {
        try {
            const { body } = req
            await registerUserValidator.validate(body, { abortEarly: true })
            const user = await this.authService.registerUser(body)
            res.status(201).json(user)
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async loggedUser(req: Request, res: Response): Promise<void> {

        try {
            const { authorization } = req.headers
            const [, token]: any = authorization?.split(" ")
            const user = await this.authService.loggedUser(token)
            res.status(200).json(user)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }

    }


}
