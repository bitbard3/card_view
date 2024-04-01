import express from 'express';
import usersRouter from './users.routes.js'
import teamRouter from './team.routes.js'
export const router = express.Router()

router.use('/users', usersRouter)
router.use('/team', teamRouter)