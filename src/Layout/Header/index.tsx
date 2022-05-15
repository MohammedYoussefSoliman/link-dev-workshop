import React from "react";
import { Flex } from "components/Wrappers";
import Wrapper from "./styles";
import Menu from "./Menu";
import Logo from "./Logo";
import Actions from "./Actions";
import Settings from "./Settings";

export default function Header() {
  const [scrolledStyle, setScrolledStyle] = React.useState<boolean>(false);

  const toggleScrolledStyle = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setScrolledStyle(true);
    } else if (scrolled <= 10) {
      setScrolledStyle(false);
    }
  };

  window.addEventListener("scroll", toggleScrolledStyle);

  return (
    <Wrapper scrolled={scrolledStyle}>
      <Flex align="center" justify="flex-end" fullHeight fullWidth>
        <Logo />
        <Settings />
        <Actions />
        <Menu />
      </Flex>
    </Wrapper>
  );
}
