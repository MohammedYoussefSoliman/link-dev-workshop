import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import Spinner from "components/Spinner";
import { ButtonPropsType } from "../types";
import StyledButton from "./styles";

export default function Button({
  children,
  color,
  isLoading,
  size = "md",
  ...rest
}: ButtonPropsType) {
  const theme = useTheme();

  return (
    <StyledButton color={color || theme.colors.white} size={size} {...rest}>
      {isLoading ? (
        <Flex gap="8px" align="center">
          <Spinner
            // eslint-disable-next-line no-nested-ternary
            size={size === "sm" ? 14 : size === "md" ? 18 : 24}
            thickness={size === "sm" ? 4 : 6}
            topColor={theme.colors.primary[300]}
            bottomColor={theme.colors.primary[100]}
          />
          {children}
        </Flex>
      ) : (
        children
      )}
    </StyledButton>
  );
}
