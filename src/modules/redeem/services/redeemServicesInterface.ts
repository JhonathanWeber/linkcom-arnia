import { RedeemProductDTO } from "../dtos/redeemProductDTO";
import { RedeemProduct } from "../models/redeemModel";

export interface IRedeemProductService {
    addRedeemTransaction(dataTransaction: RedeemProductDTO): Promise<RedeemProduct>
    getAllRedeemTransaction(): Promise<Array<RedeemProduct>>
}