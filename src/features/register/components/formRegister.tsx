"use client";

import { FormField, SubmitButton } from "@/components/form-field";
import { registerSchema, RegisterSchema } from "@/features/validation/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UseRegisterMutation } from "../hooks/useRegisterMutation";

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

  const { registerMutation, isPending } = UseRegisterMutation();

  return (
    <form onSubmit={handleSubmit((values) => registerMutation(values))} className="mt-6 flex flex-col gap-4" noValidate>
      <FormField
        id="username"
        label="Username"
        placeholder="Nama tampilan Anda"
        autoComplete="username"
        error={errors.username?.message}
        {...register("username")}
      />
      <FormField
        id="email"
        type="email"
        label="Email"
        placeholder="nama@email.com"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <FormField
        id="password"
        type="password"
        label="Password"
        placeholder="Min. 8 karakter"
        autoComplete="new-password"
        error={errors.password?.message}
        {...register("password")}
      />
      <p className="text-xs text-primary-10">
        Gunakan huruf besar, huruf kecil, angka, dan simbol.
      </p>
      <SubmitButton isPending={isPending}>Registrasi</SubmitButton>
    </form>
  );
}
