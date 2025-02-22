export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  width?: string | number;
}

export interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

