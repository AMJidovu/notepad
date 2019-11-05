import { Router } from "express"
import { check, validationResult } from "express-validator"
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  OK,
} from "http-status-codes"
import { v4 as uuid } from "uuid"

import { ERRORS } from "../constants"
import { authenticate as authMiddleware } from "../middlewares/auth"
import { Article } from "../models/Article"

export const articles = Router()

articles.post(
  "/",
  // prettier-ignore
  [
    check("title").exists().isLength({ min: 1}),
    check("content").exists().isLength({ min: 1 }),
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

articles.get("/", async (req, res, next) => {
  try {
    res.status(OK).send(await Article.findAll())
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(ERRORS.SERVER_ERROR)
  }
})

articles.get("/:id", async (req, res, next) => {
  try {
    res.status(OK).send(await Article.findByPk(req.params.id))
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(ERRORS.SERVER_ERROR)
  }
})
