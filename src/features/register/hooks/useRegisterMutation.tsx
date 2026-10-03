"use client";
import { RegisterApi } from "@/api/registerApi";
import { RegisterSchema } from "@/features/validation/register-schema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UseRegisterMutation(getValues: () => RegisterSchema) {
  const router = useRouter();

  const { mutate: registerMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { username, email, password } = getValues();
      return await RegisterApi({username, email, password });
    },
    onSuccess(res: any) {
      toast.success("registration successfull");
      router.push("/landing-user");
    },
    onError(error: any) {
      toast.error(error?.response?.data?.message);
    },
  });

  return { registerMutation, isPending };
}
