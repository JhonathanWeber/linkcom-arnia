import { InferSchemaType, Model, Schema, model, ObjectId } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    deletedAt: {
        type: Date,
        default: null,

    },
    gems: {
        type: Number,
        default: 0,
        required: true
    },
    typeUser: {
        type: String,
        default: 'user',
        required: true
    }




}, {
    timestamps: true
})
// extrai todos os dados 
export type User = InferSchemaType<typeof userSchema>

export const UserModel: Model<User> = model('User', userSchema);