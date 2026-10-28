import { LoginAdminSchema } from "@/features/validation/login-admin-schema";
import { adminApi } from "@/lib/backendless";

export async function LoginAdminApi({ email, password }: LoginAdminSchema) {
  return await adminApi.post("/users/login", { login: email, password });
}
