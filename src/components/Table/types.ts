export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

export interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

