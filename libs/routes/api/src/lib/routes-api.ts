import { Message } from '@tryst/interfaces/api'
import { Router } from 'express'
import { router as Users } from '@tryst/routes/users'
import { router as Auth } from '@tryst/routes/auth'
import { router as Private } from '@tryst/routes/private'
import { cookieJwtAuth } from '@tryst/middleware/auth'

// import { router as example } from './routes/example'

export const router = Router()

// for testing up status of API
router.get('/', (req, res) => {
  console.log('HEALTH:: /api was pinged.')

  res.status(200).json({
    message: 'Tryst API is running.'
  } as Message)
})

// ROUTES
router.use('/users', Users)
router.use('/auth', Auth)
router.use('/private', cookieJwtAuth, Private)
