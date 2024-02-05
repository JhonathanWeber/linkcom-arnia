import { InferSchemaType, Model, Schema, model } from "mongoose";


const userSchema = new Schema({
    name: {
        type:'string',
        required: true,

    },
    email: {
        type:'string',
        required : true,
        unique: true,
    },
    password: {
        type:'string',
        required : true,
        select : false,
    },
    deletedAt: {
        type: Date,
        default: null,

    }

},{
    timestamps: true
})
// extrai todos os dados 
export type User = InferSchemaType<typeof userSchema>

export const UserModel : Model<User> = model('User',userSchema);