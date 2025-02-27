import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DrawerProvider } from "./contexts/DrawerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DrawerProvider>
    <App />
  </DrawerProvider>
);
