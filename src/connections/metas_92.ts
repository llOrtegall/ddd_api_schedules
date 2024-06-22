import { Sequelize } from 'sequelize'
import 'dotenv/config'

const metas92 = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mariadb'
})

export { metas92 }
