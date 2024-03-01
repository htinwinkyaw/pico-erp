import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import Input from "@/app/_components/inputs/Input";
import React from "react";
import SelectInput from "@/app/_components/inputs/SelectInput";
import { roles } from "@/app/_constants/roles";

interface RolePermissionFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const RolePermissionForm: React.FC<RolePermissionFormProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Input
        id="username"
        label="Username"
        register={register}
        rules={{ required: true }}
        errors={errors}
        placeholder="Enter Unique Username"
      />
      <Input
        id="password"
        label="Password"
        type="password"
        register={register}
        rules={{ required: true }}
        errors={errors}
        placeholder="Password"
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        register={register}
        rules={{ required: true }}
        errors={errors}
        placeholder="Confirm Password"
      />
      <SelectInput
        id="role"
        label="Select Role"
        options={roles}
        errors={errors}
        register={register}
        rules={{ required: true }}
      />
    </div>
  );
};

export default RolePermissionForm;
