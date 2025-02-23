import { Button as RadixButton } from "@radix-ui/themes";
import { ButtonProps } from "./types";
import { Text } from "@radix-ui/themes";
import classes from "./style.module.scss";

export const Button = ({
  icon: Icon,
  title,
  type = "button",
  width,
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const customStyle = width
    ? { width: typeof width === "number" ? `${width}px` : width }
    : {};

  return (
    <RadixButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${classes.button} 
        ${classes[variant]} 
        ${disabled ? classes.disabled : ""}
      `}
      style={customStyle}
    >
      {Icon && (
        <Text as="span" className={classes.icon}>
          <Icon />
        </Text>
      )}
      <Text as="span" className={classes.title}>
        {title}
      </Text>
    </RadixButton>
  );
};
