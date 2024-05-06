import { Product } from '../types/Product';
import zod from 'zod';

const productSchema = zod.object({
  name: zod.string().min(3).max(255),
  price: zod.number().positive(),
  is_stock: zod.boolean()
});

export function ValidateProduct(data: Product){
  return productSchema.safeParseAsync(data);
}