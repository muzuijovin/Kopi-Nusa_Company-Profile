"use client";

import { loginSchema, LoginSchema } from "@/features/validation/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UseLoginMutation } from "../hooks/useLoginMutation";

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const {loginMutation, isPending} =UseLoginMutation(getValues)

  return (
    <>
      <form onSubmit={handleSubmit(() => loginMutation())}>
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
          <p className="label">{errors?.username?.message}</p>
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
          <p className="label">{errors?.email?.message}</p>
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
          <p className="label">{errors?.password?.message}</p>
        </fieldset>

        <div className="flex justify-center">
          <button disabled={isPending} className="btn bg-[#6F4E37] rounded-md ">
            <h1 className="text-[#fffff] text-[14px] font-label font-medium">
              MASUK KE AKUN
            </h1>
          </button>
        </div>
      </form>
    </>
  );
}
