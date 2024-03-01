import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  className?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
  rules?: Partial<{
    required: string | boolean;
  }>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  className,
  register,
  rules,
  errors,
  disabled,
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        type="checkbox"
        id={id}
        {...register(id, { ...rules })}
        disabled={disabled}
        className="h-5 w-5 text-blue-400 hover:cursor-pointer"
      />
      <label htmlFor={id} className="text-sm font-medium hover:cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
