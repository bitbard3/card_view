import express from 'express'
import { createBook, createUser, deleteUser, bookInfo, updateUser, userInfo, users } from '../controllers/users.controllers.js'
const router = express.Router()

router.get('/', users)
router.get('/:id', userInfo)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/book', createBook)
router.get('/bookInfo/:id', bookInfo)


export default router