import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import React from "react";

interface InputProps {
  id: string;
  type?: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
  className?: string;
  rules?: Partial<{
    required: string | boolean;
    minLength: { value: number; message: string };
    maxLength: { value: number; message: string };
    pattern: { value: RegExp; message: string };
  }>;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  placeholder,
  register,
  errors,
  disabled,
  rules,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`${errors[id] && "text-rose-400"}`}>
        {label}
        {rules?.required && <span className="text-rose-500"> *</span>}
      </label>
      <input
        id={id}
        type={type || ""}
        {...register(id, rules)}
        placeholder={placeholder}
        autoComplete="off"
        disabled={disabled}
        className={`px-3 py-2 w-full border rounded-lg
          placeholder:text-sm placeholder:opacity-70 focus:outline-slate-300
          ${
            errors[id]
              ? "text-rose-400 border-rose-400 focus:outline-rose-400"
              : "border-slate-200"
          }
        `}
      />
      {errors[id] && errors[id]!.type === "required" && (
        <span className="text-xs text-rose-500">field cannot be empty.</span>
      )}
    </div>
  );
};

export default Input;
