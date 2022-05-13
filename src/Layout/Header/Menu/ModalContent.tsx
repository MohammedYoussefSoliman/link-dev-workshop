import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "theme";
import { Flex } from "components/Wrappers";
import { IconButton } from "components/Buttons";
import { TimesIcon } from "assets/svgs";
import Logo from "../Logo";
import Actions from "../Actions";
import Wrapper, { MenuWrapper } from "../styles";

type ModalContentProps = {
  onClose: () => void;
};

export default function ModalContent({ onClose }: ModalContentProps) {
  return (
    <ThemeProvider theme={theme}>
      <MenuWrapper>
        <Wrapper>
          <Flex align="center" justify="flex-end" fullHeight fullWidth>
            <Logo />
            <Flex className="header--actions" flex={1}>
              ui settings
            </Flex>
            <Actions />
            <Flex align="center" justify="center" className="header--menu">
              <IconButton
                color={theme.colors.white}
                onClick={onClose}
                Icon={TimesIcon}
                size="lg"
              />
            </Flex>
          </Flex>
        </Wrapper>
      </MenuWrapper>
    </ThemeProvider>
  );
}
