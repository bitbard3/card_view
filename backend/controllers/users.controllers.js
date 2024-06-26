import { User, Book, Chapter } from "../db/db.js"
import { userIdSchema } from "../validations/team.validations.js";
import { createUserSchema, updateUserSchema } from "../validations/user.validation.js"
export const users = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 20;
        const skip = (page - 1) * limit;
        const filters = {};
        if (req.query.domain) {
            const domains = req.query.domain.split(',').map(domain => new RegExp(domain.trim(), 'i'));
            filters.domain = { $in: domains };
        }
        if (req.query.gender) {
            const genders = req.query.gender.split(',').map(gender => new RegExp('\\b' + gender.trim() + '\\b', 'i'));
            filters.gender = { $in: genders };
        }
        if (req.query.available) {
            filters.available = req.query.available === 'true';
        }
        const users = await User.find(filters)
            .skip(skip)
            .limit(limit)
        const totalUsers = await User.countDocuments(filters);
        const totalPages = Math.ceil(totalUsers / limit);
        const response = {
            users,
            pagination: {
                totalUsers,
                totalPages,
                currentPage: page,
                usersPerPage: limit
            }
        };
        res.json(response);
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
};

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

async function createChapters(chaptersData) {
    const chapterIds = [];

    for (const chapData of chaptersData) {
        const chapter = await createChapter(chapData);
        chapterIds.push(chapter._id);
    }

    return chapterIds;
}

async function createChapter(chapData) {
    const { title, subChapters } = chapData;

    let chapter;

    if (subChapters && subChapters.length > 0) {
        const nestedChapters = await createChapters(subChapters);
        chapter = await Chapter.create({ title, subChapters: nestedChapters });
    } else {
        chapter = await Chapter.create({ title });
    }

    return chapter;
}

export const createBook = async (req, res) => {
    const payload = req.body
    try {
        const chapters = await createChapters(payload.chapters);
        const book = await Book.create({
            name: payload.name,
            author: payload.author,
            chapters: chapters
        });

        res.status(200).json({ msg: "Book created", id: book._id });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
const populateSubChapters = async (chapterId) => {
    const chapter = await Chapter.findById(chapterId).populate({
        path: 'subChapters',
        populate: { path: 'subChapters' }
    });
    return chapter;
};

const populateChapters = async (chapters) => {
    const populatedChapters = [];
    for (const chapter of chapters) {
        const populatedChapter = await populateSubChapters(chapter._id);
        populatedChapters.push(populatedChapter);
    }
    return populatedChapters;
};

export const bookInfo = async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await Book.findById(bookId).populate('chapters');
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const populatedChapters = await populateChapters(book.chapters);
        book.chapters = populatedChapters;
        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};