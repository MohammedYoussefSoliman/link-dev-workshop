import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { flexGapCalculator } from "../../../functions";
import { StyledFlexWrapper } from "../types";

const Wrapper = styled("div")<StyledFlexWrapper>`
  display: flex;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}
    ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
    ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
    ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
    ${({ gap, direction }) =>
    gap &&
    css`
      gap: ${gap};
      @supports not (gap: ${gap}) {
        ${flexGapCalculator(gap, direction)}
      }
    `}
`;

export default Wrapper;
