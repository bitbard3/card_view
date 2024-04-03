import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/routes.js'
dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT, () => {

    console.log("listening in port ", process.env.PORT)
})