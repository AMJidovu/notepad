export { default as CONFIG } from '../config'

export const ERRORS = {
  INVALID_AUTHORIZATION: {
    code: 'authorization.invalid',
    message: 'Invalid authorization header.',
  },
  MISSING_AUTHORIZATION: {
    code: 'authorization.missing',
    message: 'Authorization header missing or malformed.',
  },
  INVALID_CREDENTIALS: {
    code: 'credentials.invalid',
    message: 'Invalid authentication credentials.',
  },
  MISSING_CREDENTIALS: {
    code: 'credentials.missing',
    message: 'Authentication credentials missing or malformed.',
  },
  USER_EXISTS: {
    code: 'user.exists',
    message: 'User with that email already exists.',
  },
  USER_MALFORMED: {
    code: 'user.malformed',
    message: 'User is malformed or has missing fields.',
  },
  USER_NOT_FOUND: {
    code: 'user.not_found',
    message: 'Could not find user with that ID.',
  },
}
