import styled from "@emotion/styled";
import { Flex } from "components/Wrappers";

const Wrapper = styled(Flex)`
  label: hero-sectors;
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.secondary[200]};
  .sticker {
    padding: 9px 15px;
    background: rgba(0, 0, 0, 0.09);
  }
  .link {
    margin-top: auto;
  }
`;

export default Wrapper;
