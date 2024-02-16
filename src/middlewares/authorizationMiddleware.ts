import { NextFunction, Request, Response } from "express";
import { User } from "../modules/user/models/userModel";
import jwt from 'jsonwebtoken'

export class Authorization {
    static async handlerAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { authorization } = req.headers

        try {
            if (!authorization) {
                throw new Error('Invalid authorization')
            }
            const [, token] = authorization.split(" ")

            const decodeUser: any = jwt.verify(token, process.env.JWT_SECRET as string)
            const userDecoded: User = { ...decodeUser._doc }
            if (userDecoded.typeUser !== 'admin') throw new Error(`${userDecoded.typeUser} not permission to access`)
            return next()

        } catch (erro: any) {
            res.status(401).json({ mensage: 'access unauthorization', error: erro.message })

        }

    }
}