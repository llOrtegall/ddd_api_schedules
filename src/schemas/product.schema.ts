import { Product } from '../types/Product';
import zod from 'zod';

const productSchema = zod.object({
  name: zod.string({
    required_error: 'Name is required'
  }).min(3).max(255),
  price: zod.number({
    required_error: 'Price is required'
  }).positive(),
  is_stock: zod.boolean()
});

export function ValidateProduct(data: Product){
  return productSchema.safeParseAsync(data);
}