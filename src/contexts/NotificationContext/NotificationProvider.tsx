import { useState, useCallback } from "react";
import {
  Notification,
  NotificationProviderProps,
  NotificationType,
} from "./types";
import Notifications from "../../components/Notifications";
import { NotificationContext } from "./useNotification";

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (text: string, type: NotificationType) => {
      const newNotification: Notification = {
        id: Date.now(),
        message: text,
        type,
      };
      setNotifications((prev) => [...prev, newNotification]);
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((n) => n.id !== newNotification.id)
        );
      }, 3000);
    },
    []
  );

  const notify = (text: string) => addNotification(text, NotificationType.INFO);
  const notifyError = (text: string) =>
    addNotification(text, NotificationType.ERROR);

  return (
    <NotificationContext.Provider
      value={{ notify, notifyError, notifications }}
    >
      {children}
      <Notifications />
    </NotificationContext.Provider>
  );
};
