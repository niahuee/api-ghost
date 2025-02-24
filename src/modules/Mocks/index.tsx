import { Box, Text, Card, Flex } from "@radix-ui/themes";
import classes from "./style.module.scss";
import ApiCard from "../../components/ApiCard";
import { useMockData } from "./hooks/useMockData";
import { Button, SecondaryButton } from "../../components/Button";
import { PlusIcon } from "@radix-ui/react-icons";
import Search from "../../components/Search";
import { useState } from "react";
import dictionary from "../../dictionary";
import { useMockManager } from "./hooks/useMockManager";
import { HttpMethod, ResponseType } from "../../types/mock";

const Mocks = () => {
  const { addMock } = useMockManager();

  const [search, setSearch] = useState("");
  const { data } = useMockData(search);
  const onSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleAddMock = () => {
    const newMock = {
      id: "3",
      name: "Delete Product",
      url: "https://dev.fetchdatacommon.com/postshttps://dev.fetchdatacommon.com/postshttps://dev.fetchdatacommon.com/posts",
      http: {
        method: HttpMethod.DELETE,
        code: 404,
      },
      delay: 300,
      isActive: false,
      group: "Products",
      response: {
        type: ResponseType.JSON,
        body: "s",
      },
    };
    addMock(newMock);
  };

  return (
    <Box>
      <Box className={classes.actions}>
        <Box className={classes.actions__left}>
          <Search value={search} onChange={onSearchChange} />
        </Box>

        <Box className={classes.actions__right}>
          <SecondaryButton title={dictionary.createGroup} />
          <Button
            title={dictionary.addMock}
            icon={PlusIcon}
            onClick={handleAddMock}
          />
        </Box>
      </Box>
      <Flex>
        {data.length > 0 ? (
          data.map((mock) => (
            <Card key={mock.id} className={classes.apiCard}>
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
