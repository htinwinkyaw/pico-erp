import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import React from "react";

interface SelectInputProps {
  id: string;
  label: string;
  options: any[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
  rules?: Partial<{
    required: string | boolean;
  }>;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  options,
  register,
  errors,
  disabled,
  rules,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`${errors[id] && "text-error"}`}>
        {label}
        {rules?.required && <span className="text-rose-500"> *</span>}
      </label>
      <select
        id={id}
        {...register(id, { ...rules })}
        disabled={disabled}
        className={`px-3 py-2 rounded-lg w-full  border
        placeholder:text-sm placeholder:opacity-70 
        focus:outline-slate-300
        ${errors[id] && "border-rose-400"}`}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option.role}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
