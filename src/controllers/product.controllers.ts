import { Product } from "../model/product.model";
import { Request, Response } from "express";
import { faker } from "@faker-js/faker";

export async function getProducts(req: Request, res: Response) {
  try {
    const selectProducts = await Product.findAll()
    return res.status(200).json({ message: 'List of Products', products: selectProducts })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const selectProduct = await Product.findOne({ where: { id: req.params.id } })
    if (!selectProduct) {
      return res.status(404).json({ message: 'Product Not Found' })
    }
    return res.status(200).json({ message: 'Product Detail', product: selectProduct })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    await Product.sync();
    const createProduct = await Product.create({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      is_stock: faker.datatype.boolean()
    })
    return res.status(201).json({ message: 'Product Created Succesfield', product: createProduct })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function updateProductById(req: Request, res: Response) {
  try {
    const updateProduct = await Product.update({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      is_stock: faker.datatype.boolean()
    }, { where: { id: req.params.id } })

    if (!updateProduct) {
      return res.status(404).json({ message: 'Product Not Found' })
    }

    if (updateProduct[0] === 0) {
      return res.status(404).json({ message: 'Product Not Found' })
    }

    return res.status(200).json({ message: 'Product Updated Succesfield', product: updateProduct })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export async function deleteProductById(req: Request, res: Response) {
  try {
    const productDeleted = await Product.destroy({ where: { id: req.params.id } })

    if (!productDeleted) {
      return res.status(404).json({ message: 'Product Not Found' })
    }

    return res.status(200).json({ message: 'Product Deleted Succesfield' })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
