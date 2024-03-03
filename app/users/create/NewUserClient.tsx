"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/app/_components/ui/Button";
import Card from "@/app/_components/ui/Card";
import Heading from "@/app/_components/ui/Heading";
import React from "react";
import RolePermissionForm from "./RolePermissionForm";
import UserInformationForm from "./UserInformationForm";
import { useRouter } from "next/navigation";

const NewUserClient = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      role: "",
    },
  });

  const handleCancelButton = () => {
    router.push("/users");
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form>
        <Card>
          <Heading title="User Information" />
          <UserInformationForm register={register} errors={errors} />
        </Card>

        <Card>
          <Heading title="Role Permission" />
          <RolePermissionForm register={register} errors={errors} />
        </Card>
      </form>

      <div className="flex felx-row items-center justify-end gap-3 py-3">
        <Button label="Cancel" onClick={handleCancelButton} outline />
        <Button label="Create" type="submit" onClick={handleSubmit(onSubmit)} />
      </div>
    </>
  );
};

export default NewUserClient;
