"use client";

import {
  registerSchema,
  RegisterSchema,
} from "@/features/validation/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UseRegisterMutation } from "../hooks/useRegisterMutation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function FormRegister() {
  const [showPassword, setShowPassword] = useState(false);

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

          {/* Pembungkus input dibuat relative agar posisi tombol mata bisa pas di kanan dalam input */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"} // Mengubah type input secara dinamis
              className="input w-full pr-12" // Diberi pr-12 (padding-right) agar teks password tidak menabrak ikon mata
              placeholder="Type password here"
              {...register("password")}
            />

            {/* Tombol Toggle Mata daisyUI / Tailwind */}
            <button
              type="button" // Wajib type="button" agar tidak memicu submit form secara tidak sengaja
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Pesan Error Validasi */}
          <p className="label text-red-500 text-xs mt-1">
            {errors?.password?.message}
          </p>
        </fieldset>

        <div className="flex justify-center mt-10">
          <button
            disabled={isPending}
            className="btn btn-success w-full font-label font-semibold text-[14px] text-slate-100 bg-[#6F4E37] shadow-none border-none hover:opacity-97"
          >
            Registrasi
          </button>
        </div>
      </form>
    </>
  );
}
