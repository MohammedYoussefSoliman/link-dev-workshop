import React from "react";
import Wrapper from "./styles";

type AsidePropsType = {
  children?: React.ReactNode;
  className?: string;
};

export default function Aside({ children, className }: AsidePropsType) {
  return <Wrapper className={className}>{children}</Wrapper>;
}
