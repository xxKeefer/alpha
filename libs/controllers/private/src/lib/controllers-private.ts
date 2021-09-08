import { Request, Response } from 'express'
import { Message } from '@tryst/interfaces/api'

export const example = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'You were authenticated' } as Message)
}
