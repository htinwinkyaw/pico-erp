import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/app/_components/ui/Button";
import Heading from "@/app/_components/ui/Heading";
import Input from "@/app/_components/inputs/Input";
import PermissionCheckboxes from "./PermissionCheckboxes";
import React from "react";
import { useRouter } from "next/navigation";

const NewRoleForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handleCancelButton = () => {
    router.push("/roles");
  };

  return (
    <form>
      <Input
        id="name"
        label="Role Name"
        register={register}
        errors={errors}
        placeholder="Enter New Role Name"
        rules={{ required: true }}
        className="mb-5"
      />
      <div className="mb-5"></div>
      <Heading title="Permissions" />
      <PermissionCheckboxes register={register} errors={errors} />
      <div className="flex felx-row items-center justify-end gap-3 py-3">
        <Button label="Cancel" onClick={handleCancelButton} outline />
        <Button label="Create" type="submit" onClick={handleSubmit(onSubmit)} />
      </div>
    </form>
  );
};

export default NewRoleForm;
