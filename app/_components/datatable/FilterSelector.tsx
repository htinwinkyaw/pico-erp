import React, { ChangeEvent } from "react";

interface FilterSelectorProps {
  id: string;
  label: string;
  value: any;
  options: { value: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSelector: React.FC<FilterSelectorProps> = ({
  id,
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="font-semibold">{label}:</label>
      <select
        id={id}
        onChange={onChange}
        value={value}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelector;
