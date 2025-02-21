import {
  Box,
  Table as DataTable,
  TableThead,
  TableTr,
  TableTh,
  TableTbody,
  TableTd,
} from "@mantine/core";
import { TableProps } from "./types";
import { processNestedValue } from "../../utils";
import dictionary from "../../dictionary";
import classes from "./style.module.scss";

export const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  return (
    <Box className={classes.table__container}>
      <DataTable className={classes.table} striped>
        <TableThead>
          <TableTr className={classes.table__head}>
            {columns.map((col) => (
              <TableTh
                key={String(col.key)}
                className={classes.table__head__item}
                style={{ width: col.width }}
              >
                {col.header}
              </TableTh>
            ))}
          </TableTr>
        </TableThead>
        <TableTbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableTr key={rowIndex} className={classes.table__row}>
                {columns.map((col) => (
                  <TableTd
                    key={String(col.key)}
                    className={classes.table__cell}
                    style={{ width: col.width }}
                  >
                    {col.render
                      ? col.render(row)
                      : String(processNestedValue(row, col.key) ?? "")}
                  </TableTd>
                ))}
              </TableTr>
            ))
          ) : (
            <TableTr>
              <TableTd
                colSpan={columns.length}
                className={classes.table__empty}
              >
                {dictionary.empty}
              </TableTd>
            </TableTr>
          )}
        </TableTbody>
      </DataTable>
    </Box>
  );
};

