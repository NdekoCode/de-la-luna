import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: false,
    default: 0,
  },
  rating: {
    type: Number,
    required: false,
    default: 0,
  },
  stock: {
    type: Number,
    required: false,
    default: 1,
  },
  brand: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  images: {
    type: Array,
    required: false,
  },
});
const ProductMDL = new model("product", ProductSchema);
export default ProductMDL;
