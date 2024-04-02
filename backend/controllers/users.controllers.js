import { User } from "../db/db.js"
import { createUserSchmea } from "../validations/user.validation.js"

export const createUser = async (req, res) => {
    const payload = req.body
    const validPayload = createUserSchmea.safeParse(payload)
    if (validPayload.error) {
        res.status(411).json({ msg: "Invalid payload" })
        return
    }
    const userExist = await User.findOne({ email: payload.email })
    if (!userExist) {
        try {
            await User.create(payload)
            res.json({ msg: "User created" })
        } catch (error) {
            res.status(500).json({ msg: "Internal server error" })
        }
    }
    else {
        res.status(409).json({ msg: "User already exist" })
    }
}