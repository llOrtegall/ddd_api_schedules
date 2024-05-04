import { Request, Response, Router } from "express";
import { Product } from '../model/product.model'
import { faker } from "@faker-js/faker"; 

const productsRouter = Router();

productsRouter.get("/products", async (req: Request, res: Response) => {
  const selectProducts = await Product.findAll()
  if (!selectProducts) {
    return res.status(404).json({ message: 'Products Not Found' })
  }
  return res.status(200).json({ message: 'List of Products', data: selectProducts })
});

productsRouter.get("/products", (req, res) => {
  res.send("products route");
});

productsRouter.post("/products", async (req: Request, res: Response) => {
  await Product.sync();
  const createProduct = await Product.create({
    product_name: faker.commerce.productName(),
    price: faker.commerce.price(),
    is_stock: faker.datatype.boolean()
  })

  return res.status(201).json({ message: 'Product Created Succesfield', data: createProduct })
});

productsRouter.patch("/products", (req, res) => {
  res.send("products route");
});

productsRouter.delete("/products", (req, res) => {
  res.send("products route");
});

export { productsRouter }