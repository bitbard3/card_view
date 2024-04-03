import express from 'express'
import { createUser, deleteUser, updateUser, userInfo, users } from '../controllers/users.controllers.js'
const router = express.Router()

router.get('/', users)
router.get('/:id', userInfo)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router