import { Model, DataTypes } from "sequelize";
import { sequelize } from '../connections/mysql'

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.CHAR(36),
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false
  },
  is_stock:{
    type: DataTypes.BOOLEAN,
  }
}, {sequelize, modelName: 'product'})


export { Product }