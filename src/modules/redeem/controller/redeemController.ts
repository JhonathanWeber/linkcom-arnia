import { Request, Response } from "express";
import { IRedeemProductService } from "../services/redeemServicesInterface";
import { IRedeemProductController } from "./redeemControllerInterface";
import { addRedeemTransactioValidator } from "../utils/addRedeemTransactioValidator";


export class RedeemProductController implements IRedeemProductController {
    constructor(private redeemService: IRedeemProductService) { }


    async addRedeemTransaction(req: Request, res: Response): Promise<void> {
        try {
            const { body } = req;
            await addRedeemTransactioValidator.validate(body, { abortEarly: true });
            const redeemTransaction = await this.redeemService.addRedeemTransaction(body)
            res.status(201).json(redeemTransaction);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
    async getAllRedeemTransactions(req: Request, res: Response): Promise<void> {
        try {
            const redeemTransactions = await this.redeemService.getAllRedeemTransaction()
            res.status(200).json(redeemTransactions)
        } catch (error: any) {
            res.status(500).json({ message: error.message });

        }
    }
}