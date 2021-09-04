import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { environment as env } from '@tryst/environments/api'

export const cookieJwtAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req?.cookies?.refresh_token) return res.status(403)
  const token = req.cookies.refresh_token
  try {
    jwt.verify(token, env.refresh_secret)
    next()
  } catch (error) {
    return res.status(403)
  }
}
