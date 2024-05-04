import { Request, Response, Router } from "express";
import { Product } from '../model/product.model'
import { faker } from "@faker-js/faker"; 
import { where } from "sequelize";

const productsRouter = Router();

productsRouter.get("/products", async (req: Request, res: Response) => {
  const selectProducts = await Product.findAll()
  if (!selectProducts) {
    return res.status(404).json({ message: 'Products Not Found' })
  }
  console.log(selectProducts.length);
  
  return res.status(200).json({ message: 'List of Products', products: selectProducts })
});

productsRouter.get("/product/:id", async (req: Request, res: Response) => {
  const selectProduct = await Product.findOne({ where: { id: req.params.id } })
  if (!selectProduct) {
    return res.status(404).json({ message: 'Product Not Found' })
  }  
  return res.status(200).json({ message: 'Product Detail', product: selectProduct })
});

productsRouter.post("/products", async (req: Request, res: Response) => {
  await Product.sync();
  const createProduct = await Product.create({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    is_stock: faker.datatype.boolean()
  })

  return res.status(201).json({ message: 'Product Created Succesfield', product: createProduct })
});

productsRouter.put("/products/:id", async (req: Request, res: Response) => {
  const updateProduct = await Product.update({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    is_stock: faker.datatype.boolean()
  }, { where: { id: req.params.id } } )

  if (!updateProduct) {
    return res.status(404).json({ message: 'Product Not Found' })
  }

  if (updateProduct[0] === 0) {
    return res.status(404).json({ message: 'Product Not Found' })
  }

  return res.status(200).json({ message: 'Product Updated Succesfield', product: updateProduct })

})


productsRouter.delete("/products/:id", async (req: Request, res: Response) => {
  const productDeleted = await Product.destroy({ where: { id: req.params.id } })

  if (!productDeleted) {
    return res.status(404).json({ message: 'Product Not Found' })
  }

  return res.status(200).json({ message: 'Product Deleted Succesfield' })
});

export { productsRouter }