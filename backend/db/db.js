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
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
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
    },
    avatar: {
        type: String,
        required: false,
    },
    domain: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
}
)

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
})

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    chapters: [{
        ref: "Chapter",
        type: mongoose.Schema.Types.ObjectId
    }]
})

const chapterSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subChapters: [{
        ref: "Chapter",
        type: mongoose.Schema.Types.ObjectId
    }]
})



export const Book = mongoose.model('Book', bookSchema)
export const Chapter = mongoose.model('Chapter', chapterSchema)
export const User = mongoose.model('User', userSchema)
export const Team = mongoose.model('Team', teamSchema)
