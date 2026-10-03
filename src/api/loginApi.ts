import { LoginSchema } from "@/features/validation/login-schema";
import axios from "axios";

export async function LoginApi({ email, password }: LoginSchema) {
  const apiUrl = "https://api.backendless.com";
  const appId = "49BC5A71-3AE3-4B65-B99F-A4F5AAD7738D";
  const restApiKey = "5650E33C-6FB3-4D44-B9E4-9CFF3E576AD1";
  const url = `${apiUrl}/${appId}/${restApiKey}`;

  return await axios.post(`${url}/users/login`, {
    login: email,
    password: password,
  });
}