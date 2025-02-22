import { Box } from "@mantine/core";
import classes from "./style.module.scss";
import ApiCard from "../../components/ApiCard";
import { useMockData } from "./hooks/useMockData";

const Mocks = () => {
  const { data } = useMockData();

  return (
    <Box className={classes.wrapper}>
      {data.length > 0 ? (
        data.map((mock) => {
          return (
            <ApiCard
              title={mock.name}
              url={mock.url}
              method={mock.http.method}
              statusCode={mock.http.code}
            />
          );
        })
      ) : (
        <div>No data</div>
      )}
    </Box>
  );
};

export default Mocks;
