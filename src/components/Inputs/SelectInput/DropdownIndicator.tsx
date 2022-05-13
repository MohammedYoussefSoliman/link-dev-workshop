import { DropdownIndicatorProps, components } from "react-select";
import { ChevronIcon } from "assets/svgs";
import { OptionType } from "../types";

const { DropdownIndicator } = components;

export default function Dropdown(
  props: DropdownIndicatorProps<OptionType, true>,
) {
  return (
    <DropdownIndicator {...props}>
      <ChevronIcon />
    </DropdownIndicator>
  );
}
