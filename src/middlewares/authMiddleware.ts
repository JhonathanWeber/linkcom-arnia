import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import "dotenv/config"



export class AuthMiddleware{
    static async handler(req:Request,res:Response,next:NextFunction){
        const{authorization}:any = req.headers
        try {
            if(!authorization){
                throw new Error('Invalid authorization')
            }

            const [,token] = authorization.split(" ")

            //checagem do token
            jwt.verify(token,process.env.JWT_SECRET as string)
            // se o token estiver valido
            return next()

            
        } catch (erro:any) {
            res.status(401).json({mensage: 'access unauthorization', error: erro.message})
            
        }


    }
}