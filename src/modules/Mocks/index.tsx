import { Box, Text, Card, Flex } from "@radix-ui/themes";
import classes from "./style.module.scss";
import ApiCard from "../../components/ApiCard";
import { Button, SecondaryButton } from "../../components/Button";
import { PlusIcon } from "@radix-ui/react-icons";
import Search from "../../components/Search";
import { useState } from "react";
import dictionary from "../../dictionary";
import { useMockManager } from "./hooks/useMockManager";
import { Mock } from "../../types/mock";
import { useDrawerContext } from "../../contexts/DrawerContext";

const Mocks = () => {
  const [search, setSearch] = useState("");
  const { filteredMocks, deleteMock } = useMockManager(search);

  const { openDrawer } = useDrawerContext();

  const handleMockManagement = (mock?: Mock) => {
    openDrawer(
      () => <div>Mock</div>,
      mock ? dictionary.editMock : dictionary.addMock
    );
  };

  const onSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleDeleteMock = (mock: Mock) => {
    deleteMock(mock.id);
  };

  const handleEditMock = (mock: Mock) => {
    handleMockManagement(mock);
  };

  const handleCopyMock = (mock: Mock) => {
    handleMockManagement(mock);
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
            onClick={() => handleMockManagement()}
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
