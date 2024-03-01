"use client";

import {
  DataTableColumnType,
  DataTableRowType,
  DataTableType,
} from "@/app/_types/datatable.type";
import { HiFilter, HiPlus } from "react-icons/hi";
import React, { ChangeEvent } from "react";

import Button from "../ui/Button";
import SearchBox from "./SearchBox";
import { TiExport } from "react-icons/ti";
import { useRouter } from "next/navigation";

interface TableControlProps {
  columns: DataTableColumnType[];
  rows: DataTableRowType[];
  table: DataTableType;
  setSearchedRows: React.Dispatch<React.SetStateAction<DataTableRowType[]>>;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableControl: React.FC<TableControlProps> = ({
  columns,
  rows,
  table,
  setSearchedRows,
  setOpenFilter,
}) => {
  const router = useRouter();
  const filterableColumns = columns.filter((column) => column.filterable);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredRows = rows.filter((row) => {
      return Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchTerm)
      );
    });
    setSearchedRows(filteredRows);
  };

  const toggleFilter = () => {
    setOpenFilter((prev) => {
      return !prev;
    });
  };

  const handleCreateRoute = () => {
    router.push(table.linkForAddAction);
  };

  return (
    <div className="flex flex-row items-center justify-between mx-3 mt-5 mb-10">
      <div>
        <SearchBox
          id="search"
          placeholder={`Search ${table.name}`}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex flex-row items-center gap-3">
        {filterableColumns.length > 0 && (
          <Button
            label="Filter"
            leftIcon={HiFilter}
            onClick={toggleFilter}
            outline
            disabled={filterableColumns.length === 0}
          />
        )}
        <Button
          label="Export"
          leftIcon={TiExport}
          onClick={() => {}}
          outline
          disabled
        />
        <Button
          label={`Create ${table.name}`}
          leftIcon={HiPlus}
          onClick={handleCreateRoute}
        />
      </div>
    </div>
  );
};

export default TableControl;
