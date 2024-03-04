"use client";

import {
  DataTableColumnType,
  DataTableRowType,
  DataTableType,
} from "@/app/_types/datatable.type";
import React, { useState } from "react";

import Card from "../ui/Card";
import TableBody from "./TableBody";
import TableControl from "./TableControl";
import TableFilter from "./TableFilter";
import TableHead from "./TableHead";

interface DataTableProps {
  table: DataTableType;
  rows: DataTableRowType[];
  columns: DataTableColumnType[];
}

const DataTable: React.FC<DataTableProps> = ({ table, rows, columns }) => {
  const [filteredRows, setFilteredRows] = useState<DataTableRowType[]>(rows);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <>
      {openFilter && (
        <TableFilter
          columns={columns}
          rows={rows}
          setFilteredRows={setFilteredRows}
          setOpenFilter={setOpenFilter}
        />
      )}
      <Card>
        <TableControl
          columns={columns}
          rows={rows}
          table={table}
          setSearchedRows={setFilteredRows}
          setOpenFilter={setOpenFilter}
        />
        {/* MAIN TABLE START */}
        <div className="overflow-x-auto">
          <table className="table min-w-full">
            <TableHead columns={columns} />
            <TableBody columns={columns} rows={filteredRows} />
          </table>
        </div>
        {/* MAIN TABLE END */}
        {filteredRows.length === 0 && (
          <div className="text-2xl font-semibold py-10 text-center text-slate-400">
            No Data Found
          </div>
        )}
      </Card>
    </>
  );
};

export default DataTable;
