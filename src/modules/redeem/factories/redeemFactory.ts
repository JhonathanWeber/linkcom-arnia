import { RedeemProductController } from "../controller/redeemController";
import { redeemModel } from "../models/redeemModel";
import { RedeemProductRepo } from "../repo/redeemRepo";
import { RedeemProductService } from "../services/redeemServices";




class RedeemProductFactory {
    static getInstance() {
        const redeemProductRepo = new RedeemProductRepo(redeemModel)
        const redeemProductService = new RedeemProductService(redeemProductRepo)
        const redeemProductController = new RedeemProductController(redeemProductService)
        return redeemProductController
    }
}

export const redeemProductModule = RedeemProductFactory.getInstance()