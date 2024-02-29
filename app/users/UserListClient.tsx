"use client";

import {
  CellPosition,
  DataTableColumnType,
  DataTableRowType,
  DataTableType,
} from "../_types/datatable.type";
import Status, { StatusType } from "../_components/ui/Status";

import DataTable from "../_components/datatable/DataTable";
import Dropdown from "../_components/ui/Dropdown";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import IconButton from "../_components/ui/IconButton";
import { useState } from "react";
import { users } from "../_constants/users";

const UserListClient = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  console.log(activeDropdown);

  const toggleDropdown = (id: number) => {
    if (activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const columns: DataTableColumnType[] = [
    {
      field: "user",
      headerName: "User",
      headerPosition: CellPosition.left,
      dataPosition: CellPosition.left,
      renderCell: (params) => {
        return (
          <div className="flex flex-row gap-3">
            <div className="flex items-center justify-center h-10 w-10 text-white text-2xl bg-rose-400 rounded-full">
              {params.value.name[0]}
            </div>
            <div className="flex flex-col">
              <div>{params.value.name}</div>
              <div>{params.value.email}</div>
            </div>
          </div>
        );
      },
    },
    {
      field: "username",
      headerName: "Username",
      dataPosition: CellPosition.left,
      headerPosition: CellPosition.left,
    },
    {
      field: "role",
      headerName: "Role",
      dataPosition: CellPosition.center,
      headerPosition: CellPosition.center,
      renderCell: (params) => {
        return <Status status={params.value} />;
      },
      filterable: true,
    },
    {
      field: "status",
      headerName: "Status",
      dataPosition: CellPosition.center,
      headerPosition: CellPosition.center,
      renderCell: (params) => {
        return (
          <Status
            status={params.value}
            statusType={
              params.value === "active" ? StatusType.success : StatusType.fail
            }
          />
        );
      },
      filterable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerPosition: CellPosition.center,
      dataPosition: CellPosition.center,
      renderCell: (params) => {
        return (
          <div className="relative">
            <IconButton
              icon={HiOutlineDotsHorizontal}
              onClick={toggleDropdown.bind(null, params.value)}
            />
            {activeDropdown === params.value && (
              <Dropdown
                buttons={[
                  { label: "Edit", onClick: () => {} },
                  { label: "Delete", onClick: () => {} },
                ]}
              />
            )}
          </div>
        );
      },
    },
  ];

  const rows: DataTableRowType[] = users.map((user) => {
    return {
      user: { name: user.name, email: user.email },
      username: user.username,
      role: user.role,
      status: user.status,
      actions: user.id,
    };
  });

  const table: DataTableType = {
    name: "users",
    linkForAddAction: "/users/create",
  };

  return (
    <div>
      <DataTable columns={columns} rows={rows} table={table} />
    </div>
  );
};

export default UserListClient;
