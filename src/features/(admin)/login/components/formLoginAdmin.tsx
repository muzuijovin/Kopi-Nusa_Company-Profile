"use client";

import { FormField, SubmitButton } from "@/components/form-field";
import { loginAdminSchema, LoginAdminSchema } from "@/features/validation/login-admin-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UseLoginAdminMutation } from "../hooks/useLoginAdminMutation";

export function FormLoginAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginAdminSchema>({ resolver: zodResolver(loginAdminSchema) });

  const { loginAdminMutation, isPending } = UseLoginAdminMutation();

  return (
    <form onSubmit={handleSubmit((values) => loginAdminMutation(values))} className="mt-6 flex flex-col gap-4" noValidate>
      <FormField
        id="email"
        type="email"
        label="Email admin"
        placeholder="admin@kopinusa.id"
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
      <SubmitButton isPending={isPending}>Masuk Sebagai Admin</SubmitButton>
    </form>
  );
}
