import { Router } from 'express'
import { v4 as uuid } from 'uuid'

import { User } from '../models/User'

export const users = Router()

users.post('/', async (req, res, next) => {
  try {
    const user = await User.create({ id: uuid(), ...req.body })
    res.status(201).send(user)
  } catch (e) {
    next(e)
  }
})

users.get('/', async (req, res, next) => {
  try {
    res.status(200).send(await User.scope('withoutPassword').findAll())
  } catch (e) {
    next(e)
  }
})
