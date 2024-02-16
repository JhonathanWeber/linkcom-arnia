import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import "dotenv/config"
import { User } from "../modules/user/models/userModel";



export class Authentication {
    static async handler(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { authorization } = req.headers

        try {
            if (!authorization) {
                throw new Error('Invalid authorization')
            }

            const [, token] = authorization.split(" ")

            const decodeUser: any = jwt.verify(token, process.env.JWT_SECRET as string)
            const userDecoded: User = { ...decodeUser._doc }

            return next()

        } catch (erro: any) {
            res.status(401).json({ mensage: 'access unauthorization', error: erro.message })

        }


    }
}