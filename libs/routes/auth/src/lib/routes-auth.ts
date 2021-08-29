import { Router } from 'express'
import { login } from '@tryst/controllers/auth'

export const router = Router()

router.route('/login').post(login)
