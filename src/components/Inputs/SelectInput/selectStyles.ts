/* eslint-disable no-nested-ternary */
import { useTheme } from "@emotion/react";

type SelectStyleSettingsType = {
  error?: boolean;
  rounded?: boolean;
  withBorder?: boolean;
  background?: string;
};

const useSelectStyles = ({
  error,
  rounded,
  withBorder,
  background,
}: SelectStyleSettingsType) => {
  const theme = useTheme();
  return {
    control: (base: any) => ({
      ...base,
      borderRadius: rounded ? "21px" : "none",
      border: withBorder ? `1px solid ${theme.colors.white}` : "none",
      borderColor: error ? theme.colors.error[300] : theme.colors.primary[200],
      background: background || theme.colors.primary[300],
      height: "42px",
      boxShadow: "none",
      "&:hover": {
        border: withBorder ? `1px solid ${theme.colors.primary[100]}` : "none",
      },
      "&:focus-within": {
        border: `2px solid ${theme.colors.primary[200]}`,
      },
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 0,
      background: theme.colors.primary[100],
    }),
    option: (base: any, state: any) => ({
      ...base,
      padding: "0.5rem",
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
        color: `${state.isSelected && theme.colors.white}`,
        p: {
          color: `${state.isSelected && theme.colors.white}`,
        },
      },
    }),
  };
};

export default useSelectStyles;
