import { userApi } from "@/lib/backendless";

export interface SessionUser {
  objectId: string;
  username: string;
  email: string;
}

export async function GetUserApi(objectId: string) {
  const res = await userApi.get<SessionUser>(`/users/${objectId}`);
  return res.data;
}
