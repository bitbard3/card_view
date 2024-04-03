import z from 'zod'

export const userIdSchema = z.string().length(24);

export const createTeamSchema = z.object({
    name: z.string(),
    users: z.array(userIdSchema)
});