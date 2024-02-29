import React from "react";

interface DropdownProps {
  buttons: { label: string; onClick: () => void }[];
}

const Dropdown: React.FC<DropdownProps> = ({ buttons }) => {
  return (
    <div className="absolute top-0 right-0 mt-6 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
      {/* Dropdown items */}
      <div className="py-1">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              {button.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
