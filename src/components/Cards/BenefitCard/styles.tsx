import styled from "@emotion/styled";
import { Flex } from "components/Wrappers";
import tinycolor from "tinycolor2";

const StyledCard = styled(Flex)`
  padding: 24px 32px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  max-width: 140px;
  .title {
    text-transform: uppercase;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) =>
      tinycolor(theme.colors.white).setAlpha(0.5).toString()};
  }
`;

export default StyledCard;
