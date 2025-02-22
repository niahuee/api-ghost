import * as RadixSwitch from "@radix-ui/react-switch";
import classes from "./style.module.scss";

interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className={classes.switch}
      checked={checked}
      onCheckedChange={onChange}
    >
      <RadixSwitch.Thumb className={classes.switch__thumb} />
    </RadixSwitch.Root>
  );
};

export default Switch;
