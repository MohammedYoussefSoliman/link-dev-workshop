import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import { IconButton } from "components/Buttons";
import { AlphaIcon, ModeIcon } from "assets/svgs";

export default function Settings() {
  const theme = useTheme();

  return (
    <Flex
      className="header--actions"
      flex={1}
      gap="30px"
      align="center"
      justify="flex-end"
    >
      <IconButton color={theme.colors.white} Icon={ModeIcon} />
      <Flex align="center">
        <IconButton
          color={theme.colors.white}
          Icon={AlphaIcon}
          iconSize={11.8125}
        />
        <IconButton
          color={theme.colors.white}
          Icon={AlphaIcon}
          iconSize={15.75}
        />
        <IconButton color={theme.colors.white} Icon={AlphaIcon} />
      </Flex>
    </Flex>
  );
}
