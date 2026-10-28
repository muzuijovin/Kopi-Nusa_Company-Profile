"use client";

import { LoginApi } from "@/api/loginApi";
import { LoginSchema } from "@/features/validation/login-schema";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UseLoginMutation() {
  const router = useRouter();
  const { setUserAuthStore } = useAuthStore();

  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: (values: LoginSchema) => LoginApi(values),
    onSuccess(res) {
      setUserAuthStore(res.data?.username, res.data?.email, res.data?.objectId);
      router.push("/");
      toast.success("Login berhasil, selamat datang!");
    },
    onError(error) {
      toast.error(isAxiosError(error) ? error.response?.data?.message : "Login gagal");
    },
  });

  return { loginMutation, isPending };
}
