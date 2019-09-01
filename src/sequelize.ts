import path from 'path'
import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/db.sqlite',
  logging: false,
  models: [path.join(__dirname, 'models')],
})
