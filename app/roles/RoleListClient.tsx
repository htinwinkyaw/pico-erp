"use client";

import {
  CellPosition,
  DataTableColumnType,
  DataTableRowType,
  DataTableType,
} from "../_types/datatable.type";
import React, { useState } from "react";

import DataTable from "../_components/datatable/DataTable";
import Dropdown from "../_components/ui/Dropdown";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import IconButton from "../_components/ui/IconButton";
import { roles } from "../_constants/roles";

const RoleListClient = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    if (activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const columns: DataTableColumnType[] = [
    {
      field: "role",
      headerName: "Role",
      dataPosition: CellPosition.left,
      headerPosition: CellPosition.left,
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

  const rows: DataTableRowType[] = roles.map((row) => {
    return { role: row.role, actions: row.id };
  });

  const table: DataTableType = {
    name: "role",
    linkForAddAction: "/roles/create",
  };
  return (
    <div>
      <DataTable columns={columns} rows={rows} table={table} />
    </div>
  );
};

export default RoleListClient;
