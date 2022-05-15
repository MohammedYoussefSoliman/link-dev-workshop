import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "theme";
import { Flex } from "components/Wrappers";
import Aside from "components/Aside";
import MenuHeader from "./MenuHeader";
import MenuList from "./MenuList";
import MenuFooter from "./MenuFooter";
import { MenuWrapper } from "../styles";

type ModalContentProps = {
  onClose: () => void;
};

export default function ModalContent({ onClose }: ModalContentProps) {
  return (
    <ThemeProvider theme={theme}>
      <MenuWrapper direction="column">
        <MenuHeader onClose={onClose} />
        <Flex className="body" fullWidth>
          <Aside className="body--aside" />
          <Flex
            direction="column"
            className="body--content"
            flex={1}
            fullHeight
            fullWidth
          >
            <Flex flex={1} fullWidth className="body--content__list">
              <MenuList onClose={onClose} />
            </Flex>
            <MenuFooter onClose={onClose} />
          </Flex>
        </Flex>
      </MenuWrapper>
    </ThemeProvider>
  );
}
