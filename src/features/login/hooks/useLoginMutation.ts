"use cliet";

import { LoginApi } from "@/api/loginApi";
import { LoginSchema } from "@/features/validation/login-schema";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UseLoginMutation(getValues: () => LoginSchema) {
  const router = useRouter();
  const { setUserAuthStore } = useAuthStore();

  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { email, password } = getValues();
      return await LoginApi({ email, password });
    },
    onSuccess(res: any) {
      toast.success("registration successfull");
      setUserAuthStore(
        res?.data?.username,
        res?.data?.email,
        res?.data?.objectId,
      );

      // 1. SET PENANDA LOGIN DI SINI
      localStorage.setItem("is_logged_in", "true");

      // 2. REFRESH ROUTER AGAR NAVBAR MEMBACA STATE TERBARU
      router.refresh();
      router.push("/");
    },
    onError(error: any) {
      toast.error(error?.response?.data?.message);
    },
  });

  return { loginMutation, isPending };
}
