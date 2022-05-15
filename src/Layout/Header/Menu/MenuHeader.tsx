import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import { IconButton } from "components/Buttons";
import { TimesIcon } from "assets/svgs";
import Logo from "../Logo";
import Actions from "../Actions";
import Settings from "../Settings";
import Wrapper from "../styles";

type ModalContentProps = {
  onClose: () => void;
};

export default function MenuHeader({ onClose }: ModalContentProps) {
  const { colors } = useTheme();

  return (
    <Wrapper>
      <Flex align="center" justify="flex-end" fullHeight fullWidth>
        <Logo />
        <Settings />
        <Actions />
        <Flex align="center" justify="center" className="header--menu">
          <IconButton
            color={colors.white}
            onClick={onClose}
            Icon={TimesIcon}
            size="lg"
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
}
