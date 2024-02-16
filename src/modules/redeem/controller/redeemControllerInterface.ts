import { Request, Response } from "express";

export interface IRedeemProductController {
    addRedeemTransaction(req: Request, res: Response): Promise<void>
    getAllRedeemTransactions(req: Request, res: Response): Promise<void>
}