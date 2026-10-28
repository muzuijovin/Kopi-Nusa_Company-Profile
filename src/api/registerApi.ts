import { RegisterSchema } from "@/features/validation/register-schema";
import { userApi } from "@/lib/backendless";

export async function RegisterApi({ username, email, password }: RegisterSchema) {
  return await userApi.post("/users/register", { username, email, password });
}
