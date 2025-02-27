import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DrawerProvider } from "./contexts/DrawerContext.tsx";
import { NotificationProvider } from "./contexts/NotificationContext/NotificationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <NotificationProvider>
    <DrawerProvider>
      <App />
    </DrawerProvider>
  </NotificationProvider>
);
