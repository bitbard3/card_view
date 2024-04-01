import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.DB_URL)

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        uppercase: true
    },
    domain: {
        type: String,
        required: true,
        uppercase: true
    },
    available: {
        type: Boolean,
        required: true,
    },
}
)

export const User = mongoose.model('User', userSchema)