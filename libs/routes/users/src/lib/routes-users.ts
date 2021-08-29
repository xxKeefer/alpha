// import { Message } from '@tryst/api-interfaces'
import { Router } from 'express'
import { allUsers, createUser, readUser, updateUser, deleteUser } from '@tryst/controllers/users'

export const router = Router()

router.route('/').get(allUsers)
router.route('/').post(createUser)
router.route('/:id').get(readUser)
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)
