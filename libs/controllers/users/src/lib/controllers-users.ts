import { Request, Response } from 'express'
import { hashPassword } from '@tryst/utilities/users'
import { Credentials } from '@tryst/interfaces/users'
import { ApiError } from '@tryst/interfaces/api'

//TODO: make this a mongo
export const _users: Credentials[] = []

export const allUsers = (req: Request, res: Response) => {
  return res.status(200).json(_users)
}

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body as Credentials
  if (!email || !password)
    return res.status(400).json({ message: 'User credentials not provided.' } as ApiError)

  try {
    const hashed = await hashPassword(password)

    _users.push({ email, password: hashed } as Credentials)

    return res.status(201).json({ email })
  } catch (error) {
    return res.status(500).json({ message: 'createUser', error } as ApiError)
  }
}

export const readUser = (req: Request, res: Response) => {
  return res.status(200).json(_users)
}

export const updateUser = (req: Request, res: Response) => {
  return res.status(200).json(_users)
}

export const deleteUser = (req: Request, res: Response) => {
  return res.status(200).json(_users)
}
