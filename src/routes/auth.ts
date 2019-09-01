import { Router } from 'express'
import { verify } from 'argon2'
import { check, validationResult } from 'express-validator'
import { sign } from 'jsonwebtoken'
import { BAD_REQUEST } from 'http-status-codes'

import { User } from '../models/User'
import { ERRORS, CONFIG } from '../constants'

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
      return res.status(BAD_REQUEST).send(ERRORS.MISSING_CREDENTIALS)
    }

    try {
      const user = await User.findOne({ where: { email: req.body.email } })

      if (user && (await verify(user.password, req.body.password))) {
        // prettier-ignore
        const token = sign({
          user: user.id,
        }, CONFIG.secret, { expiresIn: 3600 })

        return res.send({ token, expiresIn: 3600 })
      }

      res.status(BAD_REQUEST).send(ERRORS.INVALID_CREDENTIALS)
    } catch (error) {
      next(error)
    }
  },
)
