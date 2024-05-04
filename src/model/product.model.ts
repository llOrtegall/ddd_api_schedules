import { Sequelize } from "sequelize";
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

async function testConnection(){
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection()