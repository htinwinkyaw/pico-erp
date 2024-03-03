"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";
import React, { ChangeEvent } from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  checkboxValues?: {
    id: string;
    isChecked: boolean;
  }[];
  setCheckboxValues?: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        isChecked: boolean;
      }[]
    >
  >;
  register: UseFormRegister<FieldValues>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  checkboxValues,
  setCheckboxValues,
  register,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (checkboxValues && setCheckboxValues) {
      const { id: checkboxId, checked: isChecked } = event.target;
      const [feature, permission] = id.split("-");

      if (id === "admin-all") {
        // toggle all checkboxes if it is ADMIN-ALL checkbox
        const updatedCheckboxValues = checkboxValues.map((item) => ({
          ...item,
          isChecked,
        }));
        setCheckboxValues(updatedCheckboxValues);
      } else {
        if (permission === "all") {
          // toggle all checkboxes related to the specific feature
          const updatedCheckboxValues = checkboxValues.map((item) => {
            if (item.id.includes(feature)) {
              return { ...item, isChecked };
            }
            return item;
          });

          // FEATURE-ALL checkboxes are checked, check ADMIN-ALL checkbox
          const isAllChecked = updatedCheckboxValues
            .filter((item) => {
              if (item.id.includes(permission) && item.id !== "admin-all") {
                return { ...item };
              }
            })
            .every((item) => item.isChecked);

          const result = updatedCheckboxValues.map((item) => {
            if (item.id === "admin-all") {
              return { ...item, isChecked: isAllChecked };
            }
            return item;
          });

          setCheckboxValues(result);
        } else {
          // toggle INDIVIDUAL permission checkbox
          const updatedCheckboxValues = checkboxValues.map((item) => {
            if (item.id === checkboxId) {
              return { ...item, isChecked };
            }
            return item;
          });

          // if all permissions are checked in the same feature, ALL will be checked
          const isRowChecked = updatedCheckboxValues
            .filter((item) => {
              if (item.id.includes(feature) && item.id !== `${feature}-all`) {
                return { ...item };
              }
            })
            .every((item) => item.isChecked);

          const updatedRowCheckboxValues = updatedCheckboxValues.map((item) => {
            if (item.id === `${feature}-all`) {
              return { ...item, isChecked: isRowChecked };
            }
            return item;
          });

          // if ALL ROWS are checked, ADMIN ALL will be checked
          const isAllChecked = updatedRowCheckboxValues
            .filter((item) => {
              return item.id.includes("all") && item.id !== "admin-all";
            })
            .every((entry) => entry.isChecked);

          const result = updatedRowCheckboxValues.map((item) => {
            if (item.id === "admin-all") {
              return { ...item, isChecked: isAllChecked };
            }
            return item;
          });

          setCheckboxValues(result);
        }
      }
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        {...register(id)}
        onChange={handleChange}
        className="w-5 h-5 text-blue-400 hover:cursor-pointer"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
