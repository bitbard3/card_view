import express from 'express'
import { createUser, updateUser } from '../controllers/users.controllers.js'
const router = express.Router()

router.post('/', createUser)
router.put('/:id', updateUser)

export default router