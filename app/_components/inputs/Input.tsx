import React, { ChangeEvent } from "react";

import { IconType } from "react-icons";
import { toPascalCase } from "@/app/_utils/toPascalCase";

interface InputProps {
  id: string;
  type?: string;
  label?: string;
  icon?: IconType;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  icon: Icon,
  placeholder,
  onChange,
}) => {
  const placeholderText = toPascalCase(placeholder ? placeholder : "");

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type ? type : "text"}
        id={id}
        placeholder={placeholderText}
        onChange={onChange}
        autoComplete="off"
        className={`px-3 py-2 rounded-lg w-80`}
      />
    </div>
  );
};

export default Input;
