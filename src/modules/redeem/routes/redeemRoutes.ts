import { Router } from "express";
import { Authentication } from "../../../middlewares/authenticationMiddleware";
import { redeemProductModule } from "../factories/redeemFactory";


export const redeemProductRoutes = Router()


redeemProductRoutes.post('/redeem-product', Authentication.handler, redeemProductModule.addRedeemTransaction.bind(redeemProductModule))
redeemProductRoutes.get("/transactions", Authentication.handler, redeemProductModule.getAllRedeemTransactions.bind(redeemProductModule))