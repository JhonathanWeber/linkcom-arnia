import { isValidObjectId } from "mongoose";
import { RedeemProductDTO } from "../dtos/redeemProductDTO";
import { RedeemProduct } from "../models/redeemModel";
import { IRedeemRepo } from "../repo/redeemRepoInterface";
import { IRedeemProductService } from "./redeemServicesInterface";
import { IUserRepo } from "../../user/repos/userRepoInterface";
import { UserModel } from "../../user/models/userModel";
import { ProductModel } from "../../product/models/productModel";


export class RedeemProductService implements IRedeemProductService {
    constructor(private redeemRepo: IRedeemRepo) { }

    async addRedeemTransaction(dataTransaction: RedeemProductDTO): Promise<RedeemProduct> {
        const { userID, productID } = dataTransaction
        if (!(isValidObjectId(userID) && isValidObjectId(productID))) throw new Error('userID or productID is not found!')

        const user = await UserModel.findById(userID)
        const product = await ProductModel.findById(productID)

        if (!user) throw new Error('user not found')
        if (!product) throw new Error('product not found')
        if (user.gems < product.value) throw new Error("User has no Gems!")
        user.gems -= product.value;
        await user.save()
        const redeemFull = {
            ...dataTransaction
        }

        redeemFull.nameUser = user.name
        redeemFull.nameProduct = product.name
        redeemFull.productValue = product.value

        console.log(dataTransaction)

        const redeemTransaction = await this.redeemRepo.addRedeemTransaction(redeemFull)
        if (!redeemTransaction) throw new Error("Error register transaction")

        return redeemTransaction
    }

    async getAllRedeemTransaction(): Promise<RedeemProduct[]> {
        const transactions = await this.redeemRepo.getAllRedeemTransaction()
        if (!transactions || transactions.length === 0) throw new Error('Redeem Product not found!')
        return transactions
    }
}