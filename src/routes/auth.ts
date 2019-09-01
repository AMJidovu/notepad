import { Router } from 'express'
import { verify } from 'argon2'
import { check, validationResult } from 'express-validator'

import { User } from '../models/User'
import { ERRORS } from '../constants'

export const auth = Router()

auth.post(
  '/login',
  // prettier-ignore
  [
    check('email').exists().isEmail(),
    check('password').exists(),
  ],
  async (req, res, next) => {
    if (!validationResult(req).isEmpty()) {
      return res.status(400).send(ERRORS.MISSING_CREDENTIALS)
    }

    try {
      const user = await User.findOne({ where: { email: req.body.email } })

      if (user && (await verify(user.password, req.body.password))) {
        return res.send({ auth: true })
      }

      res.status(400).send(ERRORS.INVALID_CREDENTIALS)
    } catch (error) {
      next(error)
    }
  },
)
