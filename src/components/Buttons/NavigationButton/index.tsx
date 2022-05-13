import React from "react";
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
        {...rest}
      >
        <ArrowIcon
          color={theme.colors.primary[300]}
          direction={direction}
          size={13}
        />
      </StyledButton>
    );
  },
);
