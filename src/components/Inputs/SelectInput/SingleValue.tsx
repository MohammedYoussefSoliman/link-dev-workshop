import { SingleValueProps, components } from "react-select";
import { useTheme } from "@emotion/react";
import Typography from "components/Typography";
import { OptionType } from "../types";

export default function SingleValue({
  children,
  ...props
}: SingleValueProps<OptionType, true>) {
  const theme = useTheme();

  return (
    <components.SingleValue {...props}>
      <Typography.P2 text={children as string} color={theme.colors.white} />
    </components.SingleValue>
  );
}
