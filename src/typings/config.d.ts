import { SequelizeOptions } from 'sequelize-typescript'

export type Config = {
  secret: string
  database: SequelizeOptions
}
