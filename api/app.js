import cors from "cors";
import dotenv from "dotenv";
import express, { Router } from "express";
import { dbConnect } from "./configs/dbConfig.js";

dotenv.config();

/**
 * L'URL de base
 * @type {string}
 */
export const END_POINT = process.env.BASE_URL;
const app = express();
const routes = Router();
// On créer notre miniApplication sur un ENDBOIN
app.use(END_POINT, routes);

routes.use(express.json());
routes.use(express.urlencoded({ extended: false }));
routes.use(cors());
dbConnect();
routes.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});
routes.get("/products", (req, res) => {
  res.json({ message: "Products Page" });
});

export default app;
