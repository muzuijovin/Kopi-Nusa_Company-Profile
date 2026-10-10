"use client";

import { LoginAdminApi } from "@/api/loginAdminApi";
import { LoginAdminSchema } from "@/features/validation/login-admin-schema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UseLoginAdminMutation(getValues: () => LoginAdminSchema) {
  const router = useRouter();

  const { mutate: loginAdminMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { email, password } = getValues();
      return await LoginAdminApi({ email, password });
    },
    onSuccess(res: any) {
      toast.success("login in admin mode successfull");

      router.push("/admin/blog-create");
    },
    onError(error: any) {
      toast.error(error?.response?.data?.message);
    },
  });

  return { loginAdminMutation, isPending };
}
