import { getProducts, getProductById, createProduct, updateProductById, deleteProductById } from '../controllers/product.controllers'
import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/products", getProducts);

productsRouter.get("/product/:id", getProductById);

productsRouter.post("/products", createProduct);

productsRouter.put("/products/:id", updateProductById);

productsRouter.delete("/products/:id", deleteProductById);

export { productsRouter }