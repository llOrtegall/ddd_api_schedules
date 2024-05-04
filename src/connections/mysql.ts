import { Sequelize } from 'sequelize';
import 'dotenv/config';

const db_name = process.env.DB_NAME as string
const db_user = process.env.DB_USER as string
const db_password = process.env.DB_PASS as string
const db_port = parseInt(process.env.DB_PORT as string)
const db_host = process.env.DB_HOST as string

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: "mysql",
  port: db_port
})

export { sequelize }