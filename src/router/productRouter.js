import { Router } from "express";
import { createProduct, deleteProduct, readDetailsProduct, readProduct, updateProduct } from "../controller/productController.js";

let productRouter = Router();

productRouter
.route("/")
.post(createProduct)
.get(readProduct)

productRouter .route("/:productId")
.get(readDetailsProduct)
.patch(updateProduct)
.delete(deleteProduct)

export default productRouter