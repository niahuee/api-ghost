import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import classes from "./style.module.scss";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Search = ({
  value,
  onChange,
  placeholder = "Search...",
}: SearchProps) => {
  return (
    <TextField.Root
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={classes.search}
    >
      <TextField.Slot className={classes.search__icon}>
        <MagnifyingGlassIcon />
      </TextField.Slot>
    </TextField.Root>
  );
};

export default Search;
