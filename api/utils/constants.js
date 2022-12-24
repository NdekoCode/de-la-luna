import dotenv from "dotenv";
dotenv.config();
/**
 * L'URL de base
 * @type {string}
 */
export const END_POINT = process.env.BASE_URL;
export const END_POINT_PRODUCTS = END_POINT + "/products";
