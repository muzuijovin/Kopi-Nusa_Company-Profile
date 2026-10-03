"use client";

import {
  registerSchema,
  RegisterSchema,
} from "@/features/validation/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UseRegisterMutation } from "../hooks/useRegisterMutation";

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const { registerMutation, isPending } = UseRegisterMutation(getValues);
  return (
    <>
      <form onSubmit={handleSubmit(() => registerMutation())} className="mt-5">
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend font-label font-medium text-xs text-[#1B1C1A]">
            Username
          </legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Type username here"
            {...register("username")}
          />
          <p className="label text-red-500">{errors?.username?.message}</p>
        </fieldset>
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend font-label font-medium text-xs text-[#1B1C1A]">
            Email
          </legend>
          <input
            type="email"
            className="input w-full"
            placeholder="Type email here"
            {...register("email")}
          />
          <p className="label text-red-500">{errors?.email?.message}</p>
        </fieldset>
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend font-label font-medium text-xs text-[#1B1C1A]">
            Password
          </legend>
          <input
            type="password"
            className="input w-full"
            placeholder="Type password here"
            {...register("password")}
          />
          <p className="label text-red-500">{errors?.password?.message}</p>
        </fieldset>

        <div className="flex justify-center mt-10">
          <button
            disabled={isPending}
            className="btn btn-success w-full font-label font-semibold text-[14px] text-slate-100 bg-[#6F4E37] shadow-none border-none"
          >
            Registrasi
          </button>
        </div>
      </form>
    </>
  );
}
