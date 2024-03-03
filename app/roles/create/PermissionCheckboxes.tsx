"use client";

import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import React, { useState } from "react";

import Checkbox from "@/app/_components/inputs/Checkbox";
import { features } from "@/app/_constants/features";

interface PermissionFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const PermissionForm: React.FC<PermissionFormProps> = ({
  register,
  errors,
}) => {
  const initialCheckboxValues = [
    { id: "admin-all", isChecked: false },
    ...features.flatMap((feature) => [
      { id: `${feature.name.toLowerCase()}-all`, isChecked: false },
      ...feature.permissions.map((permission) => ({
        id: `${feature.name.toLowerCase()}-${permission.toLowerCase()}`,
        isChecked: false,
      })),
    ]),
  ];

  const [checkboxValues, setCheckboxValues] = useState<
    {
      id: string;
      isChecked: boolean;
    }[]
  >(initialCheckboxValues);

  return (
    <table className="table table-auto w-full">
      <tbody>
        <tr className="border-b border-slate-300">
          <td className="py-3">Adminstrator</td>
          <td>
            <Checkbox
              id="admin-all"
              label="All"
              checked={
                checkboxValues.find((item) => item.id === "admin-all")!
                  .isChecked
              }
              checkboxValues={checkboxValues}
              setCheckboxValues={setCheckboxValues}
              register={register}
            />
          </td>
        </tr>
        {features.map((feature, fIndex) => {
          const featureId = `${feature.name.toLowerCase()}-all`;
          return (
            <tr key={fIndex} className="border-b border-slate-300">
              <td className="py-3">{feature.name}</td>
              <td>
                <Checkbox
                  id={featureId}
                  label="All"
                  checked={
                    checkboxValues.find((item) => item.id === featureId)!
                      .isChecked
                  }
                  checkboxValues={checkboxValues}
                  setCheckboxValues={setCheckboxValues}
                  register={register}
                />
              </td>
              {feature.permissions.map((permission, pIndex) => {
                const permissionId = `${feature.name.toLowerCase()}-${permission.toLowerCase()}`;
                return (
                  <td key={pIndex} className="py-3">
                    <Checkbox
                      id={permissionId}
                      label={permission}
                      checked={
                        checkboxValues.find((item) => item.id === permissionId)!
                          .isChecked
                      }
                      checkboxValues={checkboxValues}
                      setCheckboxValues={setCheckboxValues}
                      register={register}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PermissionForm;
