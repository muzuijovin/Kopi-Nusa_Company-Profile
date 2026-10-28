"use client";
import { RegisterApi } from "@/api/registerApi";
import { RegisterSchema } from "@/features/validation/register-schema";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UseRegisterMutation() {
  const router = useRouter();

  const { mutate: registerMutation, isPending } = useMutation({
    mutationFn: (values: RegisterSchema) => RegisterApi(values),
    onSuccess() {
      router.push("/login");
      toast.success("Registrasi berhasil, silakan masuk.");
    },
    onError(error) {
      toast.error(isAxiosError(error) ? error.response?.data?.message : "Registrasi gagal");
    },
  });

  return { registerMutation, isPending };
}
