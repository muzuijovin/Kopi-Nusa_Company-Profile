"use cliet";

import { loginApi } from "@/api/loginApi";
import { LoginSchema } from "@/features/validation/login-schema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UseLoginMutation(getValues: () => LoginSchema) {
  const router = useRouter();

  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { username, email, password } = getValues();
      await loginApi({username, email, password });
    },
    onSuccess(res: any) {
      toast.success("registration successfull");
      router.push("/admin/login");
    },
    onError(error: any) {
      toast.error(error?.response?.data?.message);
    },
  });

  return { loginMutation, isPending };
}
