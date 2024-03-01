import {
  DataTableColumnType,
  DataTableRowType,
} from "@/app/_types/datatable.type";
import React, { ChangeEvent, useState } from "react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import FilterSelector from "./FilterSelector";
import Heading from "../ui/Heading";

interface TableFilterProps {
  columns: DataTableColumnType[];
  rows: DataTableRowType[];
  setFilteredRows: React.Dispatch<React.SetStateAction<DataTableRowType[]>>;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableFilter: React.FC<TableFilterProps> = ({
  columns,
  rows,
  setFilteredRows,
  setOpenFilter,
}) => {
  // find columns that enabled filterable prop
  const filterableColumns = columns.filter((column) => column.filterable);

  // prepare for select inputs' options
  const [selectInputs, setSelectInputs] = useState<
    { id: string; label: string; values: string[] }[]
  >(
    filterableColumns.map((column) => ({
      id: column.field,
      label: column.headerName,
      values: [
        "all",
        ...Array.from(new Set(rows.map((row) => row[column.field]))),
      ],
    }))
  );

  // default selected input values
  const defaultSelectedValues = filterableColumns.map((column) => ({
    field: column.field,
    value: "all",
  }));

  // prepare for selected select input values
  const [selectedValues, setSelectedValues] = useState<
    { field: string; value: any }[]
  >(defaultSelectedValues);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = event.target;

    const prevValues = selectedValues.filter(
      (prevValue) => prevValue.field !== id
    );

    setSelectedValues([...prevValues, { field: id, value: value }]);
  };

  // button click (PROCEED)
  const handleFilter = () => {
    const filteredRows = rows.filter((row) =>
      selectedValues.every(
        (selectedValue) =>
          selectedValue.value === "all" ||
          row[selectedValue.field] === selectedValue.value
      )
    );
    setFilteredRows(filteredRows);
  };

  // button click (CANCEL)
  const closeFilter = () => {
    setOpenFilter(false);
    handleReset();
  };

  // button click (RESET)
  const handleReset = () => {
    setSelectedValues(defaultSelectedValues);
    setFilteredRows(rows);
  };

  return (
    <Card>
      <Heading title="Filter" />

      <div className="grid grid-cols-4 gap-3">
        {selectInputs.map((select, index) => (
          <FilterSelector
            key={index}
            id={select.id}
            label={select.label}
            onChange={handleSelectChange}
            value={
              selectedValues.find((item) => item.field === select.id)?.value
            }
            options={select.values.map((value) => ({ value }))}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <Button label="Cancel" onClick={closeFilter} outline />
        <Button label="Reset" onClick={handleReset} outline />
        <Button label="Process" onClick={handleFilter} />
      </div>
    </Card>
  );
};

export default TableFilter;
