export enum CellPosition {
  left,
  center,
  right,
}

export type DataTableRowType = {
  [key: string]: any;
};

export type DataTableColumnType = {
  field: string;
  headerName: string;
  headerPosition?: CellPosition;
  dataPosition: CellPosition;
  width?: number;
  renderCell?: React.FC<{ value: any }>;
  filterable?: boolean;
};

export type DataTableType = {
  name: string;
  linkForAddAction: string;
};
