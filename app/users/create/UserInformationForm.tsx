import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import React, { useRef } from "react";

import Checkbox from "@/app/_components/inputs/Checkbox";
import Input from "@/app/_components/inputs/Input";

interface UserInformationFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const UserInformationForm: React.FC<UserInformationFormProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3">
      <Input
        id="firstname"
        label="First Name"
        register={register}
        rules={{ required: true }}
        errors={errors}
        placeholder="Enter Your First Name"
      />
      <Input
        id="lastname"
        label="Last Name"
        register={register}
        errors={errors}
        placeholder="Enter Your Last Name"
      />
      <Input
        id="email"
        label="E-Mail"
        type="email"
        register={register}
        rules={{ required: true }}
        errors={errors}
        placeholder="Enter Your Email"
      />
      <Checkbox id="isActive" label="Is Active?" register={register} />
    </div>
  );
};

export default UserInformationForm;
