import React from "react";
import tinycolor from "tinycolor2";
import { useTheme } from "@emotion/react";
import { ArrowIcon } from "assets/svgs";
import { NavigationButtonPropsType } from "../types";
import StyledButton from "./styles";

export default React.forwardRef<HTMLButtonElement, NavigationButtonPropsType>(
  (
    {
      direction = "left",
      rounded,
      withBorder,
      iconColor,
      iconSize,
      disabled,
      ...rest
    }: NavigationButtonPropsType,
    ref,
  ) => {
    const theme = useTheme();

    return (
      <StyledButton
        ref={ref}
        color={theme.colors.primary[300]}
        rounded
        withBorder
        disabled={disabled}
        {...rest}
      >
        <ArrowIcon
          color={
            disabled
              ? tinycolor(iconColor).greyscale().toString()
              : iconColor || theme.colors.primary[300]
          }
          direction={direction}
          size={iconSize || 13}
        />
      </StyledButton>
    );
  },
);
