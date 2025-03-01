import { Label } from "@radix-ui/react-label";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Path, UseFormSetValue, FieldValues } from "react-hook-form";
import classes from "./style.module.scss";
import { Box } from "@radix-ui/themes";

interface ToggleButtonGroupProps<F extends FieldValues> {
  value: string | boolean;
  setValue: UseFormSetValue<F>;
  options: { label: string; value: string | boolean }[];
  label: string;
  field: Path<F>;
}

const ToggleButtonGroup = <F extends FieldValues>({
  value,
  setValue,
  options,
  label,
  field,
}: ToggleButtonGroupProps<F>) => {
  const handleValueChange = (newValue: string | null) => {
    if (newValue !== null) {
      const selectedValue =
        typeof options[0].value === "boolean" ? newValue === "true" : newValue;
      setValue(field, selectedValue as F[typeof field]);
    }
  };

  return (
    <Box className={classes.toggle}>
      <Label htmlFor={field} className={classes.toggle__title}>
        {label}
      </Label>
      <ToggleGroup.Root
        type="single"
        value={String(value)}
        onValueChange={handleValueChange}
        className={classes.toggle__group}
        role="radiogroup"
        aria-labelledby={field}
      >
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <ToggleGroup.Item
              key={String(option.value)}
              value={String(option.value)}
              className={`${classes.toggle__button} ${isActive ? classes.toggle__button__active : ""}`}
              aria-pressed={isActive}
              tabIndex={0}
            >
              {option.label}
            </ToggleGroup.Item>
          );
        })}
      </ToggleGroup.Root>
    </Box>
  );
};

export default ToggleButtonGroup;
