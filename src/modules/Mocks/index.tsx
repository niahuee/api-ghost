import { Box, Text, Card, Flex } from "@radix-ui/themes";
import classes from "./style.module.scss";
import ApiCard from "../../components/ApiCard";
import { useMockData } from "./hooks/useMockData";
import { Button, SecondaryButton } from "../../components/Button";
import { PlusIcon } from "@radix-ui/react-icons";

const Mocks = () => {
  const { data } = useMockData();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.actions}>
        <Box className={classes.actions__part}>
          {/* TODO: Input goes here */}
          <Box />
        </Box>
        <Box className={classes.actions__part}>
          <SecondaryButton title="Create Group" />
          <Button title="Add Mock" icon={PlusIcon} />
        </Box>
      </Box>
      <Flex direction="column">
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
    </Box>
  );
};

export default Mocks;
