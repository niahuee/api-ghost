import { Card, Text } from "@radix-ui/themes";
import classes from "./style.module.scss";

interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = ({ title, description }: EmptyStateProps) => (
  <Card className={classes.empty}>
    <Text as="p" className={classes.empty__title}>
      {title}
    </Text>
    <Text as="p" className={classes.empty__description}>
      {description}
    </Text>
  </Card>
);

export default EmptyState;
