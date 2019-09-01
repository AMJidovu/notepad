import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { ERRORS, CONFIG } from '../constants'
import { User } from '../models/User'
import { promisifyAll } from 'bluebird'
import { UNAUTHORIZED } from 'http-status-codes'

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

      return res.status(UNAUTHORIZED).send(ERRORS.INVALID_AUTHORIZATION)
    } catch (error) {
      return res.status(UNAUTHORIZED).send(ERRORS.INVALID_AUTHORIZATION)
    }
  } else {
    res.status(UNAUTHORIZED).send(ERRORS.MISSING_AUTHORIZATION)
  }
}
