import { OptionProps, components } from "react-select";
import { useTheme } from "@emotion/react";
import Typography from "components/Typography";
import { OptionType } from "../types";

export default function Option(props: OptionProps<OptionType, true>) {
  const { children, isSelected, isFocused } = props;

  const theme = useTheme();

  return (
    <components.Option {...props}>
      <Typography.P2
        text={children as string}
        color={
          isSelected && !isFocused
            ? theme.colors.primary[300]
            : theme.colors.white
        }
      />
    </components.Option>
  );
}
