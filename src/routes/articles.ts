import { v4 as uuid } from "uuid"
import { Router } from "express"
import { CREATED, BAD_REQUEST, INTERNAL_SERVER_ERROR } from "http-status-codes"
import { check, validationResult } from "express-validator"

import { authenticate as authMiddleware } from "../middlewares/auth"
import { Article } from "../models/Article"
import { ERRORS } from "../constants"

export const articles = Router()

articles.post(
  "/",
  // prettier-ignore
  [
    check('title').exists().isLength({ min: 1}),
    check('content').exists().isLength({ min: 1 }),
  ],
  authMiddleware,
  async (req, res, next) => {
    if (!validationResult(req).isEmpty()) {
      return res.status(BAD_REQUEST).send(ERRORS.ARTICLE_MALFORMED)
    }

    try {
      const article = await Article.create({
        ...req.body,
        id: uuid(),
        authorId: res.locals.user.id,
      })

      res.status(CREATED).send(article)
    } catch (error) {
      res.status(INTERNAL_SERVER_ERROR).send(ERRORS.SERVER_ERROR)
    }
  },
)
