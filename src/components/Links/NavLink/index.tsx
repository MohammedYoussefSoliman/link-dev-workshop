import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import Typography from "components/Typography";
import { ArrowIcon } from "assets/svgs";
import StyledNavigationButton from "./styles";
import { NavLinkTypeProps } from "../types";

export default function NavLink({ to, iconColor, variant }: NavLinkTypeProps) {
  const theme = useTheme();

  return (
    <RouterLink to={to}>
      {variant === "horizontal" ? (
        <Flex gap="18px" align="center">
          <Typography.P2
            hover={{
              decoration: "underline",
            }}
            capitalizeFirstLetter
            text="more"
          />
          <StyledNavigationButton direction="column" variant="horizontal">
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
            capitalizeFirstLetter
            text="more"
          />
          <ArrowIcon color={iconColor || theme.colors.white} />
        </StyledNavigationButton>
      )}
    </RouterLink>
  );
}
