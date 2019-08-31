import { Router } from 'express'
import { v4 as uuid } from 'uuid'
import { hash } from 'argon2'

import { User } from '../models/User'

export const users = Router()

users.post('/', async ({ body }, res, next) => {
  try {
    res.status(201).send(
      await User.create({
        ...body,
        id: uuid(),
        password: await hash(body.password),
      }),
    )
  } catch (error) {
    error.name === 'SequelizeUniqueConstraintError'
      ? res.status(400).send({
          error: 'user.exists',
          message: 'The email is already in use',
        })
      : next(error)
  }
})

users.get('/', async (req, res, next) => {
  try {
    res.status(200).send(await User.scope('withoutPassword').findAll())
  } catch (e) {
    next(e)
  }
})
