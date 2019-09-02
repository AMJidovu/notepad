import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import { CONFIG } from './constants'

export const sequelize = new Sequelize({
  logging: false,
  models: [path.join(__dirname, '..', 'models')],
  ...CONFIG.database,
})
