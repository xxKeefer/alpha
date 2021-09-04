import { Request, Response } from 'express'
import { Credentials } from '@tryst/interfaces/users'
import { ApiError } from '@tryst/interfaces/api'
import { _users } from '@tryst/controllers/users'
import { verifyPassword } from '@tryst/utilities/users'
import * as jwt from 'jsonwebtoken'
import { environment as env } from '@tryst/environments/api'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as Credentials

    const user = _users.find((u) => u.email === email)
    if (!user) return res.status(404).json({ message: 'Cannot find user' } as ApiError)

    const verified = await verifyPassword(password, user.password)
    if (!verified) return res.status(403).json({ message: 'Denied access' } as ApiError)

    delete user.password
    const accessToken = jwt.sign(user, env.access_secret, { expiresIn: '10m' })
    const refreshToken = jwt.sign(user, env.refresh_secret, { expiresIn: '7d' })
    res.cookie('refresh_token', refreshToken, { httpOnly: true })

    return res.status(200).json({ user, accessToken })
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error } as ApiError)
  }
}
