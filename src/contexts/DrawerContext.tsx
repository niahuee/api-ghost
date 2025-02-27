import { createContext, useContext, useState, ReactNode } from "react";

type DrawerContentRender = () => ReactNode;

interface DrawerContextType {
  isOpen: boolean;
  openDrawer: (content: DrawerContentRender, title: string) => void;
  closeDrawer: () => void;
  drawerContent: DrawerContentRender | null;
  title: string;
}

interface DrawerProviderProps {
  children: ReactNode;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] =
    useState<DrawerContentRender | null>(null);
  const [title, setTitle] = useState("");

  const openDrawer = (content: DrawerContentRender, title: string) => {
    setTitle(title);
    setDrawerContent(() => content);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setDrawerContent(null);
  };

  return (
    <DrawerContext.Provider
      value={{ isOpen, openDrawer, closeDrawer, drawerContent, title }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};
