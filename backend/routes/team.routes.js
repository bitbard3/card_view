import express from 'express'
import { createTeam } from '../controllers/team.controllers.js'
const router = express.Router()

router.post('/', createTeam)

export default router