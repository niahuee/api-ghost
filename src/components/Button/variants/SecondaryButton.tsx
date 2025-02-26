import { Button } from "../Button";
import { ButtonProps } from "../types";

export const SecondaryButton = (props: Omit<ButtonProps, "variant">) => (
  <Button {...props} variant="secondary" />
);
