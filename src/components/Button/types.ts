import { ElementType } from "react";

export interface ButtonProps {
  icon?: ElementType;
  title: string;
  type?: "button" | "submit" | "reset";
  width?: number | string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
}
