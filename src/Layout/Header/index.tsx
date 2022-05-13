import { Flex } from "components/Wrappers";
import Wrapper from "./styles";
import Menu from "./Menu";
import Logo from "./Logo";
import Actions from "./Actions";

type HeaderProps = {
  mode?: "page" | "menu";
};

export default function Header({ mode = "page" }: HeaderProps) {
  return (
    <Wrapper>
      <Flex align="center" justify="flex-end" fullHeight fullWidth>
        <Logo />
        <Flex className="header--actions" flex={1}>
          ui settings
        </Flex>
        <Actions />
        {mode === "page" ? <Menu /> : <span>menu</span>}
      </Flex>
    </Wrapper>
  );
}
