// import { Message } from '@tryst/api-interfaces'
import { Router } from 'express'
import { example } from '@tryst/controllers/private'

export const router = Router()

router.route('/').get(example)
