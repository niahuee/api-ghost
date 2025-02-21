import { MantineProvider } from "@mantine/core";
import Mocks from "./modules/Mocks";
import "@/styles/global.scss";

const App = () => {
  return (
    <MantineProvider data-api-ghost="true">
      <Mocks />
    </MantineProvider>
  );
};

export default App;
