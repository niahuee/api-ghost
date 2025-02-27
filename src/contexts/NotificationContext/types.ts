export interface NotificationContextType {
  notify: (text: string) => void;
  notifyError: (text: string) => void;
  notifications: Notification[];
}

export enum NotificationType {
  INFO = "Info",
  ERROR = "Error",
}

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

export interface NotificationProviderProps {
  children: React.ReactNode;
}
