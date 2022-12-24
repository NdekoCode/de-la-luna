import { Router } from "express";
import ProductMDL from "../models/ProductMDL.js";
const productRouter = Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductMDL.find();
    return res.json({ products });
  } catch (error) {
    console.log(error.message);
  }
});
export default productRouter;
