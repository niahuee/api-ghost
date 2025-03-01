import { UseFormRegisterReturn } from "react-hook-form";
import * as Label from "@radix-ui/react-label";
import classes from "./style.module.scss";
import { Box, Text } from "@radix-ui/themes";

interface FormInputProps {
  label: string;
  type?: string;
  error?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const FormInput = ({
  label,
  type = "text",
  error,
  register,
  placeholder,
}: FormInputProps) => {
  return (
    <Box className={classes.form}>
      <Label.Root className={classes.form__label} htmlFor={register.name}>
        {label}
      </Label.Root>
      <input
        id={register.name}
        type={type}
        {...register}
        className={`${classes.form__input} ${error ? classes.form__input__error : ""}`}
        placeholder={placeholder}
      />
      {error && (
        <Text as="span" className={classes.form__error}>
          {error}
        </Text>
      )}
    </Box>
  );
};

export default FormInput;
