import { promisifyAll } from 'bluebird'
import { Request, Response } from 'express'
import { UNAUTHORIZED } from 'http-status-codes'
import jwt from 'jsonwebtoken'

import { CONFIG, ERRORS } from '../constants'
import { User } from '../models/User'

const { verify } = promisifyAll(jwt)

export const authenticate = async (req: Request, res: Response, next) => {
  const authorizationHeader = req.get('Authorization') || ''

  if (authorizationHeader) {
    try {
      const decoded: any = await verify(authorizationHeader, CONFIG.secret)
      const user = await User.scope('withoutPassword').findByPk(decoded.user)

      if (user) {
        res.locals.user = user
        return next()
      }

      throw Error()
    } catch (error) {
      res.status(UNAUTHORIZED).send(ERRORS.INVALID_AUTHORIZATION)
    }
  } else {
    res.status(UNAUTHORIZED).send(ERRORS.MISSING_AUTHORIZATION)
  }
}
