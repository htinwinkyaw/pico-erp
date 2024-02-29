import { CellPosition, DataTableColumnType } from "@/app/_types/datatable.type";

import React from "react";

interface TableHeadProps {
  columns: DataTableColumnType[];
}

const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead className="border-b border-dashed border-b-slate-400">
      <tr>
        {columns.map((column, index) => {
          return (
            <th
              key={index}
              className={`p-3 uppercase 
                ${column.width ? `w-${column.width}` : "w-auto"}
                ${
                  column.headerPosition === CellPosition.left
                    ? "text-left"
                    : column.headerPosition === CellPosition.center
                    ? "text-center"
                    : "text-right"
                }
              `}
            >
              {column.headerName}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
