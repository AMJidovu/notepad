import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'
import { sequelize } from './sequelize'

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(morgan('dev'))

app.listen(3000, async err => {
  await sequelize.sync({ force: true })
  console.log('> Ready on http://localhost:3000')
})
