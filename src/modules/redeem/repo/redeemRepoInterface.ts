import { RedeemProductDTO } from "../dtos/redeemProductDTO";
import { RedeemProduct } from "../models/redeemModel";



export interface IRedeemRepo {
    addRedeemTransaction(dataTransaction: RedeemProductDTO): Promise<RedeemProduct | null>
    getAllRedeemTransaction(): Promise<Array<RedeemProduct>>
}