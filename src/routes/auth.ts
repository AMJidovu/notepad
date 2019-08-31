import { Router } from 'express'
import { verify } from 'argon2'

import { User } from '../models/User'
import { ERRORS } from '../constants'

export const auth = Router()

auth.post('/login', async ({ body }, res, next) => {
  try {
    const user = await User.findOne({ where: { email: body.email } })

    if (user && (await verify(user.password, body.password))) {
      return res.send({ auth: true })
    }

    res.status(400).send(ERRORS.INVALID_CREDENTIALS)
  } catch (error) {
    next(error)
  }
})
