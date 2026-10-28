"use client";

import { FormField, SubmitButton } from "@/components/form-field";
import { loginSchema, LoginSchema } from "@/features/validation/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UseLoginMutation } from "../hooks/useLoginMutation";

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const { loginMutation, isPending } = UseLoginMutation();

  return (
    <form onSubmit={handleSubmit((values) => loginMutation(values))} className="mt-6 flex flex-col gap-4" noValidate>
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
        placeholder="Masukkan password"
        autoComplete="current-password"
        error={errors.password?.message}
        {...register("password")}
      />
      <SubmitButton isPending={isPending}>Masuk</SubmitButton>
    </form>
  );
}
