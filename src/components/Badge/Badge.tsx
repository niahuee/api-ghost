import { Badge as MantineBadge } from "@mantine/core";
import clsx from "clsx";
import classes from "./style.module.scss";
import { BadgeProps, BadgeType } from "./types";

export const Badge = ({
  color,
  value,
  width,
  type = BadgeType.DYNAMIC,
}: BadgeProps) => {
  const inlineStyle = width ? { width: `${width}px` } : {};

  const className = clsx(
    classes.badge,
    classes[`badge__${color || "green"}`],
    type === BadgeType.STATIC && classes.badge__dark
  );
  return (
    <MantineBadge className={className} style={inlineStyle}>
      {value}
    </MantineBadge>
  );
};
