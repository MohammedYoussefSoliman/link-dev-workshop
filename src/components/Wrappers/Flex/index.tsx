import React from "react";
import Wrapper from "./styles";
import { FlexPropsType } from "../types";

const Flex = React.forwardRef(
  (
    { children, as, ...props }: FlexPropsType,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Wrapper ref={ref} as={as} {...props}>
        {children}
      </Wrapper>
    );
  },
);

Flex.defaultProps = {
  width: "fit-content",
  direction: "row",
};

export default Flex;
