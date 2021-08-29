import { Message } from '@tryst/api-interfaces'
import { Router } from 'express'

// import { router as example } from './routes/example'

export const router = Router()

// for testing up status of API
router.get('/', (req, res) => {
  console.log('HEALTH:: /api was pinged.')

  res.status(200).json({
    message: 'Booking App API is running.'
  } as Message)
})

// ROUTES
// router.use('/example', example)
