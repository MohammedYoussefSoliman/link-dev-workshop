import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { resolveColorStyles } from "../styledMixins";
import { StyledIconButtonPropsType } from "../types";

const StyledIconButton = styled("button")<StyledIconButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  ${({ color }) => resolveColorStyles(color)};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `};
`;

export default StyledIconButton;
