import styled from "@emotion/styled";
import { Flex } from "components/Wrappers";

const Wrapper = styled(Flex)`
  label: invest-card;
  padding: 24px 32px;
  max-width: 450px;
  min-height: 250px;
  background: ${({ theme }) => theme.colors.primary[300]};
  .sticker {
    padding: 9px 15px;
    background: ${({ theme }) => theme.colors.primary[200]};
  }
  .link {
    margin-top: auto;
  }
`;

export default Wrapper;
