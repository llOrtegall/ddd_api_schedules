import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/products", (req, res) => {
  res.send("products route");
});

productsRouter.get("/product", (req, res) => {
  res.send("products route");
});

productsRouter.post("/product", (req, res) => {
  res.send("products route");
});

productsRouter.patch("/product", (req, res) => {
  res.send("products route");
});

productsRouter.delete("/product", (req, res) => {
  res.send("products route");
});

export { productsRouter }