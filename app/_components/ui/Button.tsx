"use client";

import { IconType } from "react-icons";
import React from "react";
import { toPascalCase } from "@/app/_utils/toPascalCase";

interface ButtonProps {
  label: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconSize?: number;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  className?: string;
  outline?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconSize: size,
  onClick,
  type,
  className,
  outline,
  disabled,
}) => {
  const labelText = toPascalCase(label);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
      className={`
        flex flex-row items-end gap-2
        px-5 py-2 rounded-lg text-md font-base outline outline-1 outline-blue-500
        ${outline ? "bg-transparent text-blue-500" : "bg-blue-500 text-white"}
        ${outline ? "hover:bg-blue-100" : "hover:bg-blue-600"}
        ${disabled ? "cursor-not-allowed hover:bg-transparent opacity-75" : ""} 
        ${className ? className : null} 
      `}
    >
      {LeftIcon && <LeftIcon size={size ? size : 24} />}
      {labelText}
      {RightIcon && <RightIcon size={size ? size : 24} />}
    </button>
  );
};

export default Button;
