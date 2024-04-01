import express from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'

const app = express()


app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log("listening in port ", process.env.PORT)
})