/* eslint-disable no-nested-ternary */
import { useTheme } from "@emotion/react";

type SelectStyleSettingsType = {
  error?: boolean;
  rounded?: boolean;
  withBorder?: boolean;
};

const useSelectStyles = ({
  error,
  rounded,
  withBorder,
}: SelectStyleSettingsType) => {
  const theme = useTheme();
  return {
    control: (base: any) => ({
      ...base,
      flexDirection: "row-reverse",
      borderRadius: rounded ? "21px" : "none",
      border: withBorder ? `1px solid ${theme.colors.white}` : "none",
      borderColor: error ? theme.colors.error[300] : theme.colors.primary[200],
      padding: "8px 32px",
      height: "42px",
      boxShadow: "none",
      "&:hover": {
        border: `1px solid ${theme.colors.primary[100]}`,
      },
      "&:focus-within": {
        border: `2px solid ${theme.colors.primary[200]}`,
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      padding: "1rem",
      height: "100%",
      background: `${
        state.isSelected
          ? theme.colors.secondary[300]
          : state.isFocused
          ? theme.colors.primary[100]
          : "transparent"
      }`,
      color: `${state.isSelected && theme.colors.primary[300]}`,
      p: {
        color: `${state.isSelected && theme.colors.primary[300]}`,
      },
      "&:hover": {
        background: theme.colors.primary[300],
      },
    }),
  };
};

export default useSelectStyles;
