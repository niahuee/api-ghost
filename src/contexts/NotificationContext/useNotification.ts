import { createContext, useContext } from "react";
import { NotificationContextType } from "./types";

export const NotificationContext =
  createContext<NotificationContextType | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
