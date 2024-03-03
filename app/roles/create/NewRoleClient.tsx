"use client";

import Card from "@/app/_components/ui/Card";
import Heading from "@/app/_components/ui/Heading";
import NewRoleForm from "./NewRoleForm";
import React from "react";

const NewRoleClient = () => {
  return (
    <Card>
      <Heading title="Create Role" />
      <NewRoleForm />
    </Card>
  );
};

export default NewRoleClient;
