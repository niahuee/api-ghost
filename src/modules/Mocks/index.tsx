import { Box, Card, Flex } from "@radix-ui/themes";
import { Button, SecondaryButton } from "../../components/Button";
import { Mock } from "../../types/mock";
import { PlusIcon } from "@radix-ui/react-icons";
import { useDrawerContext } from "../../contexts/DrawerContext";
import { useMockManager } from "./hooks/useMockManager";
import { useMemo, useState } from "react";
import ApiCard from "../../components/ApiCard";
import classes from "./style.module.scss";
import dictionary from "../../dictionary";
import Search from "../../components/Search";
import EmptyState from "../../components/EmptyState";
import MockManagement from "./MockManagement";

const Mocks = () => {
  const [search, setSearch] = useState("");
  const {
    filteredMocks: mocks,
    deleteMock,
    updateMock,
    createMock,
  } = useMockManager(search);

  const { openDrawer } = useDrawerContext();

  const handleMock = (mock?: Mock) => {
    openDrawer(
      () => (
        <MockManagement
          mock={mock}
          updateMock={updateMock}
          createMock={createMock}
        />
      ),
      mock ? dictionary.editMock : dictionary.addMock
    );
  };

  const onSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleDeleteMock = (mock: Mock) => {
    deleteMock(mock.id!);
  };

  const handleEditMock = (mock: Mock) => {
    handleMock(mock);
  };

  const handleCopyMock = (mock: Mock) => {
    handleMock(mock);
  };

  const isEmptySearch = search.length > 0;
  const isEmptyMocks = mocks.length === 0;

  const emptyState = useMemo(() => {
    return isEmptySearch && isEmptyMocks
      ? dictionary.empty.search
      : dictionary.empty.mocks;
  }, [isEmptySearch, isEmptyMocks]);

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
            onClick={() => handleMock()}
          />
        </Box>
      </Box>
      <Flex>
        {mocks.length > 0 ? (
          mocks.map((mock) => (
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
          <EmptyState
            title={emptyState.title}
            description={emptyState.description}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Mocks;
