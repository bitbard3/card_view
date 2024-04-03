import { User } from "../db/db.js"
import { userIdSchema } from "../validations/team.validations.js";
import { createUserSchema, updateUserSchema } from "../validations/user.validation.js"

export const userInfo = async (req, res) => {
    const userId = req.params.id;
    if (userIdSchema.safeParse(userId).error) {
        return res.status(411).json({ msg: "Invalid payload" })
    }
    try {
        const userExist = await User.findById(userId);
        if (userExist) {
            return res.json({ user: userExist });
        } else {
            return res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
};


export const createUser = async (req, res) => {
    const payload = req.body
    const validPayload = createUserSchema.safeParse(payload)
    if (validPayload.error) {
        return res.status(411).json({ msg: "Invalid payload" })

    }
    const userExist = await User.findOne({ email: payload.email })
    if (!userExist) {
        try {
            await User.create(payload)
            return res.json({ msg: "User created" })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: "Internal server error" })
        }
    }
    else {
        return res.status(409).json({ msg: "User already exist" })
    }
}

export const updateUser = async (req, res) => {
    const userId = req.params.id
    const payload = req.body
    const validPayload = updateUserSchema.safeParse(payload).data
    if (Object.keys(validPayload).length === 0) {
        return res.status(411).json({ msg: "Invalid payload" })
    }
    const userExist = await User.findOne({ _id: userId })
    if (userExist) {
        try {
            await User.updateOne({ _id: userId }, payload)
            return res.json({ msg: "User updated successfully" })
        } catch (error) {
            return res.status(500).json({ msg: "Internal server error" })
        }
    } else {
        return res.status(404).json({ msg: "User doesnt exist" })
    }
}

export const deleteUser = async (req, res) => {
    const userId = req.params.id
    const userExist = await User.findOne({ _id: userId })
    if (userExist) {
        try {
            await User.deleteOne({ _id: userId })
            return res.json({ msg: "User deleted successfully" })
        } catch (error) {
            return res.status(500).json({ msg: "Internal server error" })
        }
    } else {
        return res.status(404).json({ msg: "User doesnt exist" })
    }
}