import { Router } from "express";
import ProductMDL from "../models/ProductMDL.js";
import Alert from "../utils/Alert.js";
import Validator from "../utils/Validator.js";
const productRouter = Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductMDL.find().sort({ createdAt: -1 });
    return res.json({ products });
  } catch (error) {
    console.log(error.message);
  }
});
productRouter.post("/add", async (req, res) => {
  const validator = new Validator();
  const alert = new Alert(req, res);
  const bodyRequest = { ...req.body };
  if (!validator.isEmpty(bodyRequest)) {
    const product = new ProductMDL(bodyRequest);
    try {
      await product.save();
      return alert.success("Produit ajouter avec success", 201);
    } catch (error) {
      return alert.danger(error.message, 500);
    }
  }

  return alert.danger("Veuillez remplir tous les champs", 400);
});
export default productRouter;
