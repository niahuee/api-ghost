import { IconButton } from "@radix-ui/themes";
import { ElementType } from "react";
import classes from "./style.module.scss";

interface ActionButtonProps {
  icon: ElementType;
  onClick?: () => void;
  ariaLabel?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  onClick,
  ariaLabel,
}) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes.action}
    >
      <Icon />
    </IconButton>
  );
};

export default ActionButton;
