import { Colors } from "../../types/types";

export enum BadgeType {
  STATIC = "static",
  DYNAMIC = "dynamic",
}

export interface BadgeProps {
  color: Colors;
  value: string | number;
  width?: number;
  type?: BadgeType;
}
