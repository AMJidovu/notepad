import { Router } from 'express'
import { v4 as uuid } from 'uuid'
import { hash } from 'argon2'
import { check, validationResult } from 'express-validator'

import { User } from '../models/User'
import { ERRORS } from '../constants'

export const users = Router()

users.post(
  '/',
  // prettier-ignore
  [
    check('firstName').exists().isLength({ min: 1}),
    check('lastName').exists().isLength({min: 1}),
    check('email').exists().isEmail(),
    check('password').exists().isLength({ min: 8 }),
  ],
  async (req, res, next) => {
    console.log(validationResult(req))
    if (!validationResult(req).isEmpty()) {
      return res.status(400).send(ERRORS.USER_MALFORMED)
    }

    try {
      res.status(201).send(
        await User.create({
          ...req.body,
          id: uuid(),
          password: await hash(req.body.password),
        }),
      )
    } catch (error) {
      error.name === 'SequelizeUniqueConstraintError'
        ? res.status(400).send(ERRORS.USER_EXISTS)
        : next(error)
    }
  },
)

users.get('/', async (req, res, next) => {
  try {
    res.status(200).send(await User.scope('withoutPassword').findAll())
  } catch (error) {
    next(error)
  }
})
