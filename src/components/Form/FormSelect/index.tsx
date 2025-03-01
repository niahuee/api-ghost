import { Label } from "@radix-ui/react-label";
import { Box, Text } from "@radix-ui/themes";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classes from "./style.module.scss";
import dictionary from "../../../dictionary";

interface FormSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  label: string;
  error?: string;
  placeholder?: string;
}

const FormSelect = ({
  value,
  onChange,
  options,
  label,
  error,
  placeholder,
}: FormSelectProps) => (
  <Box className={classes.select}>
    <Label className={classes.select__title}>{label}</Label>
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className={`${classes.select__trigger} ${error ? classes.select__trigger__error : ""}`}
        aria-labelledby={`${label}`}
      >
        <Select.Value
          placeholder={placeholder ? placeholder : dictionary.selectOption}
        />
        <Select.Icon className={classes.select__icon}>
          <ChevronDownIcon className={classes.select__chevron} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={classes.select__content}>
          <Select.Viewport>
            {options.map(({ label, value }) => (
              <Select.Item
                key={value}
                value={value}
                className={classes.select__item}
              >
                <Select.ItemText>{label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
    {error && (
      <Text as="span" className={classes.select__error}>
        {error}
      </Text>
    )}
  </Box>
);

export default FormSelect;
