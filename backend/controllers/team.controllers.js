import { Team, User } from "../db/db.js"
import mongoose from 'mongoose'
import { createTeamSchema } from "../validations/team.validations.js";

export const createTeam = async (req, res) => {
    const { name, users } = req.body;
    const validPayload = createTeamSchema.safeParse({ name, users })
    if (users.length < 2) {
        return res.status(400).json({ msg: "Cant create team with 1 user" })
    }
    if (validPayload.error) {
        return res.status(411).json({ msg: "Invalid payload" })
    }
    const existingUsers = await User.find(
        {
            _id: { $in: users }
        }
    );
    const domainSet = new Set();
    for (const user of existingUsers) {
        if (domainSet.has(user.domain)) {
            return res.status(400).json({ msg: "One or more users have similar domain" });
        }
        domainSet.add(user.domain);
        if (!user.available) {
            return res.status(400).json({ msg: "One or more users are not available" });
        }
    }
    if (existingUsers.length !== users.length) {
        return res.status(404).json({ msg: "One or more users do not exist" });
    }
    try {
        await Team.create({ name, users })
        return res.json({ msg: "Team created" })
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
}