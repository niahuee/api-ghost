import { Box } from "@radix-ui/themes";

import "@/styles/global.scss";
import { Tabs } from "./components/Tabs";
import { usePages } from "./hooks/usePages";
import dictionary from "./dictionary";

const App = () => {
  const { pages, defaultPage } = usePages();

  return (
    <Box className="content">
      <Tabs
        defaultValue={defaultPage}
        tabs={pages}
        ariaLabel={dictionary.tabs}
      />
    </Box>
  );
};

export default App;
