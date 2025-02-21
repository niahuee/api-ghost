export enum BadgeType {
  GREEN = "green",
  BLUE = "blue",
  ORANGE = "orange",
  RED = "red",
}

export interface BadgeProps {
  type: BadgeType;
  value: number;
}

