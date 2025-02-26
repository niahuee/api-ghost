import { Button } from "../Button";
import { ButtonProps } from "../types";

export const DangerButton = (props: Omit<ButtonProps, "variant">) => (
  <Button {...props} variant="danger" />
);
