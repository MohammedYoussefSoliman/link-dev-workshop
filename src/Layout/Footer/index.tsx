import React from "react";
import { Flex } from "components/Wrappers";
import Aside from "components/Aside";
import Wrapper from "./styles";

export default function Footer() {
  return (
    <Wrapper>
      <Flex fullWidth>
        <Aside />
        <Flex
          direction="column"
          className="content"
          flex={1}
          fullHeight
          fullWidth
        >
          footer
        </Flex>
      </Flex>
    </Wrapper>
  );
}
