import React, { ChangeEvent } from "react";

import { IconType } from "react-icons";
import { toPascalCase } from "@/app/_utils/toPascalCase";

interface SearchBoxProps {
  id: string;
  type?: string;
  label?: string;
  icon?: IconType;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
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
        className={`px-3 py-2 rounded-lg w-full md:w-80 focus:outline-slate-300`}
      />
    </div>
  );
};

export default SearchBox;
