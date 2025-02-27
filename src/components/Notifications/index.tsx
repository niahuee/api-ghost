import { Box } from "@radix-ui/themes";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import {
  NotificationType,
  useNotification,
} from "../../contexts/NotificationContext";
import styles from "./style.module.scss";

const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <Box className={styles.notification__container}>
      {notifications.map((notification) => (
        <Box
          key={notification.id}
          className={`${styles.notification} ${notification.type === NotificationType.ERROR ? styles.error : styles.info}`}
        >
          {notification.type === NotificationType.ERROR ? (
            <ExclamationTriangleIcon />
          ) : (
            <InfoCircledIcon />
          )}
          {notification.message}
        </Box>
      ))}
    </Box>
  );
};

export default Notifications;
