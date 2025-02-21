import { Badge as MantineBadge } from "@mantine/core";
import { BadgeProps } from "./types";
import classes from "./style.module.scss";

export const Badge = ({ type, value }: BadgeProps) => {
  return (
    <MantineBadge className={`${classes.badge} ${classes[type]}`}>
      {value}
    </MantineBadge>
  );
};

export default Badge;

