"use client";

import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: React.ReactNode;
}

const inputClass =
  "input min-h-12 w-full rounded-lg border-line bg-white text-base focus:border-primary-150 aria-invalid:border-red-600";

// label selalu terlihat + pesan error tepat di bawah field (standar form UX)
export const FormField = forwardRef<HTMLInputElement, FieldProps>(function FormField(
  { label, error, hint, id, type, ...rest },
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const errorId = `${id}-error`;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="font-label text-sm font-medium text-ink">
          {label}
        </label>
        {hint}
      </div>
      <div className="relative">
        <input
          ref={ref}
          id={id}
          type={isPassword && showPassword ? "text" : type}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`${inputClass} ${isPassword ? "pr-12" : ""}`}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
            onClick={() => setShowPassword((v) => !v)}
            className="absolute inset-y-0 right-0 flex w-12 cursor-pointer items-center justify-center text-primary-10 hover:text-primary-150"
          >
            {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
          </button>
        )}
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
});

export function SubmitButton({ isPending, children }: { isPending: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="mt-8 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-150 font-label text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
    >
      {isPending && <span className="loading loading-spinner loading-sm" aria-hidden />}
      {children}
    </button>
  );
}
