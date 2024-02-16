import { RedeemProduct } from './../models/redeemModel';
import { Model } from "mongoose";
import { IRedeemRepo } from "./redeemRepoInterface";
import { RedeemProductDTO } from "../dtos/redeemProductDTO";


export class RedeemProductRepo implements IRedeemRepo {
    constructor(private redeemModel: Model<RedeemProduct>) { }

    async addRedeemTransaction(dataTransaction: RedeemProductDTO): Promise<RedeemProduct | null> {
        const transaction = await this.redeemModel.create(dataTransaction);
        return transaction
    }

    async getAllRedeemTransaction(): Promise<RedeemProduct[]> {
        const transactions = await this.redeemModel.find()
        return transactions
    }

}