"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginAdminSchema,
  LoginAdminSchema,
} from "@/features/validation/login-admin-schema";
import { UseLoginAdminMutation } from "../hooks/useLoginAdminMutation";

export function FormLoginAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginAdminSchema>({
    resolver: zodResolver(loginAdminSchema),
  });

  const { loginAdminMutation, isPending } = UseLoginAdminMutation(getValues);

  return (
    <>
      <form onSubmit={handleSubmit(() => loginAdminMutation())}>
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
              Masuk
            </h1>
          </button>
        </div>
      </form>
    </>
  );
}
