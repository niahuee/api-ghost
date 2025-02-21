import { Box } from "@mantine/core";
import { Table } from "../../components/Table";
import { columns } from "./config/tableConfig";
import { useMockData } from "./hooks/useMockData";
import classes from "./style.module.scss";

const Mocks = () => {
  const { data } = useMockData();

  return (
    <Box className={classes.wrapper}>
      <Table columns={columns} data={data} />
    </Box>
  );
};

export default Mocks;

