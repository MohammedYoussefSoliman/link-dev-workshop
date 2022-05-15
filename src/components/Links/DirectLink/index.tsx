import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import Typography from "components/Typography";
import { ArrowIcon } from "assets/svgs";
import StyledNavigationButton from "./styles";
import { DirectLinkTypeProps } from "../types";

export default function DirectLink({
  to,
  iconColor,
  className,
  variant,
}: DirectLinkTypeProps) {
  const theme = useTheme();

  return (
    <RouterLink className={className} to={to}>
      {variant === "horizontal" ? (
        <Flex gap="18px" align="center">
          <Typography.P2
            hover={{
              decoration: "underline",
            }}
            color={theme.colors.white}
            capitalizeFirstLetter
            text="more"
            weight={300}
          />
          <StyledNavigationButton
            align="center"
            justify="center"
            direction="column"
            variant="horizontal"
          >
            <ArrowIcon color={iconColor || theme.colors.white} size={13} />
          </StyledNavigationButton>
        </Flex>
      ) : (
        <StyledNavigationButton
          direction="column"
          variant="vertical"
          justify="center"
          align="center"
        >
          <Typography.P2
            hover={{
              decoration: "underline",
            }}
            color={theme.colors.white}
            capitalizeFirstLetter
            text="more"
            weight={300}
          />
          <ArrowIcon size={25.63} color={iconColor || theme.colors.white} />
        </StyledNavigationButton>
      )}
    </RouterLink>
  );
}
