import { InferSchemaType, Model, Schema, model } from "mongoose";



const redeemProductSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    productID: {
        type: String,
        required: true,
    },
    nameUser: {
        type: String,
        required: true,
    },
    nameProduct: {
        type: String,
        required: true,
    },
    productValue: {
        type: Number,
        required: true,
    }
}

)

export type RedeemProduct = InferSchemaType<typeof redeemProductSchema>

export const redeemModel: Model<RedeemProduct> = model('redeemProduct', redeemProductSchema)