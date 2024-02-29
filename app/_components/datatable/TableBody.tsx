import {
  DataTableColumnType,
  DataTableRowType,
} from "@/app/_types/datatable.type";

import React from "react";
import TableBodyData from "./TableBodyData";

interface TableBodyProps {
  rows: DataTableRowType[];
  columns: DataTableColumnType[];
}

const TableBody: React.FC<TableBodyProps> = ({ rows, columns }) => {
  return (
    <tbody>
      {rows.map((row, rowIndex) => {
        return (
          <tr
            key={rowIndex}
            className="border-b border-slate-300 hover:bg-slate-300"
          >
            {columns.map((column, columnIndex) => {
              return (
                <TableBodyData key={columnIndex} column={column} row={row} />
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
