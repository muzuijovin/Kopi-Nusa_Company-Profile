"use client";

import { LoginAdminApi } from "@/api/loginAdminApi";
import { LoginAdminSchema } from "@/features/validation/login-admin-schema";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UseLoginAdminMutation() {
  const router = useRouter();

  const { mutate: loginAdminMutation, isPending } = useMutation({
    mutationFn: (values: LoginAdminSchema) => LoginAdminApi(values),
    onSuccess() {
      toast.success("Login admin berhasil");
      router.push("/admin/blog-create");
    },
    onError(error) {
      toast.error(isAxiosError(error) ? error.response?.data?.message : "Login admin gagal");
    },
  });

  return { loginAdminMutation, isPending };
}
