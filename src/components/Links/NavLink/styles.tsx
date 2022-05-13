import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "components/Wrappers";

export type StyledNavLinkTypeProps = {
  variant: "vertical" | "horizontal";
};

const StyledNavigationButton = styled(Flex)<StyledNavLinkTypeProps>`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  ${({ variant }) =>
    variant === "vertical"
      ? css`
          width: 72px;
          height: 72px;
        `
      : css`
          width: 36px;
          height: 36px;
        `}
  border-radius: 50%;
`;

export default StyledNavigationButton;
