import { Box, Text, Card, Flex } from "@radix-ui/themes";
import classes from "./style.module.scss";
import ApiCard from "../../components/ApiCard";
import { Button, SecondaryButton } from "../../components/Button";
import { PlusIcon } from "@radix-ui/react-icons";
import Search from "../../components/Search";
import { useState } from "react";
import dictionary from "../../dictionary";
import { useMockManager } from "./hooks/useMockManager";
import { HttpMethod, Mock, ResponseType } from "../../types/mock";

const Mocks = () => {
  const [search, setSearch] = useState("");
  const { filteredMocks, addMock, deleteMock, updateMock } =
    useMockManager(search);

  const onSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleAddMock = () => {
    console.log("click click");
    const newMock = {
      id: `${Date.now()}`,
      name: `Mock ${Date.now()}`,
      url: "https://api.example.com/resource",
      http: {
        method: HttpMethod.GET,
        code: 200,
      },
      delay: 100,
      isActive: true,
      group: "General",
      response: {
        type: ResponseType.JSON,
        body: "{}",
      },
    };
    addMock(newMock);
  };

  const handleDeleteMock = (mock: Mock) => {
    deleteMock(mock.id);
  };

  const handleEditMock = (mock: Mock) => {
    updateMock(mock.id, { isActive: !mock.isActive });
  };

  const handleCopyMock = (mock: Mock) => {
    console.log(mock);
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
        {filteredMocks.length > 0 ? (
          filteredMocks.map((mock) => (
            <Card key={mock.id} className={classes.apiCard}>
              <ApiCard
                mock={mock}
                onEdit={handleEditMock}
                onDelete={handleDeleteMock}
                onCopy={handleCopyMock}
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
