import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { dbConnect } from "./configs/dbConfig.js";
import routes from "./routes/api.js";
import productRouter from "./routes/products.routes.js";
import { END_POINT, END_POINT_PRODUCTS } from "./utils/constants.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// On se connecte à la base de donnée
dbConnect();

// On créer notre miniApplication sur un ENDBOIN
app.use(END_POINT, routes);
app.use(END_POINT_PRODUCTS, productRouter);

export default app;
