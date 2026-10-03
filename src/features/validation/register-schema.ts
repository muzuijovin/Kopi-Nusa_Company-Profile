import * as z from "zod"; 

export const registerSchema = z.object({
  username: z.string().min(1, 'username is required').max(100, 'username only have maximum 100 character'),
  email: z.email('email is invalid').min(1, 'email is required').max(100, 'email only have maximum 100 character'),
  password: z.string().min(1, 'password is required').max(100, 'email only have maximum 100 character').regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=\[{\]};:<>|./?,-]).{8,}$/, "password must contain uppercase, lowercase, number, and special character (min. 8 characters)"),
})

export type RegisterSchema = z.infer<typeof registerSchema>