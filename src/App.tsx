import { Box } from "@radix-ui/themes";

import { Tabs } from "./components/Tabs";
import { usePages } from "./hooks/usePages";
import dictionary from "./dictionary";
import Drawer from "./components/Drawer";
import "@/styles/global.scss";

const App = () => {
  const { pages, defaultPage } = usePages();

  return (
    <Box className="content">
      <Tabs
        defaultValue={defaultPage}
        tabs={pages}
        ariaLabel={dictionary.tabs}
      />
      <Drawer />
    </Box>
  );
};

export default App;
