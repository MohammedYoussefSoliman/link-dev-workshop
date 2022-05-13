import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { resolveColorStyles, mangeIconButtonSize } from "../styledMixins";
import { StyledIconButtonPropsType } from "../types";

const StyledIconButton = styled("button")<StyledIconButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  ${({ color }) => resolveColorStyles(color)};
  ${({ size }) => mangeIconButtonSize(size || "md")};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `};
`;

export default StyledIconButton;
