import { Sequelize } from 'sequelize-typescript'
import path from 'path'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/db.sqlite',
  logging: false,
  models: [path.join(__dirname, 'models')],
})
