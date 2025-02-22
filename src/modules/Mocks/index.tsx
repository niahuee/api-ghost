import { Text, Card, Flex } from "@radix-ui/themes";
import classes from "./style.module.scss";
import ApiCard from "../../components/ApiCard";
import { useMockData } from "./hooks/useMockData";

const Mocks = () => {
  const { data } = useMockData();

  return (
    <Flex direction="column" className={classes.wrapper}>
      {data.length > 0 ? (
        data.map((mock) => (
          <Card key={mock.name} className={classes.apiCard}>
            <ApiCard
              title={mock.name}
              url={mock.url}
              method={mock.http.method}
              statusCode={mock.http.code}
            />
          </Card>
        ))
      ) : (
        <Card className={classes.noData}>
          <Text as="p">No data available</Text>
        </Card>
      )}
    </Flex>
  );
};

export default Mocks;
