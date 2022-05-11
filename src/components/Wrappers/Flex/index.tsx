import React from "react";
import Wrapper from "./styles";
import { FlexPropsType } from "../types";

const Flex = React.forwardRef(
  (
    { children, ...props }: FlexPropsType,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Wrapper ref={ref} {...props}>
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
