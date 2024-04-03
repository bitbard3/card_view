import express from 'express'
import { createTeam, teamInfo } from '../controllers/team.controllers.js'
const router = express.Router()

router.post('/', createTeam)
router.get('/:id', teamInfo)

export default router