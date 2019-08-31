import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'

import { sequelize } from './sequelize'

import { users } from './routes/users'
import { auth } from './routes/auth'

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(morgan('dev'))

app.use('/api/users', users)
app.use('/api/auth', auth)

app.listen(3000, async err => {
  await sequelize.sync()
  console.log('> Ready on http://localhost:3000')
})
