import { SequelizeOptions } from 'sequelize-typescript'
import { TransportOptions, Transport } from 'nodemailer'

export type Config = {
  secret: string
  database: SequelizeOptions
  fromAddress: string
  mailer: TransportOptions
}
