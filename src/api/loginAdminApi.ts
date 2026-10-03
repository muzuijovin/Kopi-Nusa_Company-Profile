import { LoginAdminSchema } from "@/features/validation/login-admin-schema";
import axios from "axios";

export async function LoginAdminApi({ email, password }: LoginAdminSchema) {
  const apiUrl = "https://api.backendless.com";
  const appId = "BEAC0379-56C5-435B-8BB6-97BADF58B189";
  const restApiKey = "DB1E20A1-06AF-4FE9-96EA-EEC9E9BB76A7";
  const url = `${apiUrl}/${appId}/${restApiKey}`;

  return await axios.post(`${url}/users/login`, {
    login: email,
    password: password,
  });
}
