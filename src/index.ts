import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'

import { sequelize } from './sequelize'
import { users } from './routes/users'

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(morgan('dev'))

app.use('/api/users', users)

app.listen(3000, async err => {
  await sequelize.sync()
  console.log('> Ready on http://localhost:3000')
})
