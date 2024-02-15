import { InferSchemaType, Model, Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
      required: true,
    },
    imgPath: {
      type: String,
      default: null,
      required: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
// extrai todos os dados
export type Product = InferSchemaType<typeof productSchema>;

export const ProductModel: Model<Product> = model("Product", productSchema);
