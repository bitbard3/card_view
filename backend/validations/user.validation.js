import z from 'zod'

export const createUserSchmea = z.object({
    first_name: z.string().max(50).trim(),
    last_name: z.string().max(50).trim(),
    email: z.string().email().trim().toLowerCase(),
    gender: z.string().max(50),
    avatar: z.string().optional(),
    domain: z.string().max(50),
    available: z.boolean()
})
