import z from 'zod'

export const createUserSchema = z.object({
    first_name: z.string().max(50).trim(),
    last_name: z.string().max(50).trim(),
    email: z.string().email().trim().toLowerCase(),
    gender: z.string().max(50),
    avatar: z.string().optional(),
    domain: z.string().max(50),
    available: z.boolean()
})
export const updateUserSchema = z.object({
    first_name: z.string().max(50).trim().optional(),
    last_name: z.string().max(50).trim().optional(),
    gender: z.string().max(50).optional(),
    avatar: z.string().optional().optional(),
    domain: z.string().max(50).optional(),
    available: z.boolean().optional()
})