import { LoginSchema } from "@/features/validation/login-schema";
import { userApi } from "@/lib/backendless";

export async function LoginApi({ email, password }: LoginSchema) {
  return await userApi.post("/users/login", { login: email, password });
}
