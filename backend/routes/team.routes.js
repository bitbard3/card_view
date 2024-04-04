import express from 'express'
import { createTeam, teamInfo, teams } from '../controllers/team.controllers.js'
const router = express.Router()

router.get('/', teams)
router.post('/', createTeam)
router.get('/:id', teamInfo)

export default router