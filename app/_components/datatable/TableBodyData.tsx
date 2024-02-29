import {
  CellPosition,
  DataTableColumnType,
  DataTableRowType,
} from "@/app/_types/datatable.type";

import React from "react";

interface TableBodyDataProps {
  row: DataTableRowType;
  column: DataTableColumnType;
}

const TableBodyData: React.FC<TableBodyDataProps> = ({ row, column }) => {
  return (
    <td className="px-3 py-5">
      <div
        className={`flex items-center ${
          column.dataPosition === CellPosition.left && "justify-left text-left"
        }
        ${
          column.dataPosition === CellPosition.center &&
          "justify-center text-center"
        }
        ${
          column.dataPosition === CellPosition.right && "justify-end text-end"
        }`}
      >
        {column.renderCell ? (
          <column.renderCell value={row[column.field]} />
        ) : (
          row[column.field]
        )}
      </div>
    </td>
  );
};

export default TableBodyData;
