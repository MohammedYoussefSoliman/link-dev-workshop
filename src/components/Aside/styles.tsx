import styled from "@emotion/styled";
import devices from "theme/devices";

const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100px;
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  padding: 16px;
  ${devices.medium} {
    width: 125px;
  }
  ${devices.large} {
    width: 175px;
  }
  ${devices.xLarge} {
    width: 220px;
  }
  ${devices.xxLarge} {
    width: 300px;
  }
`;

export default Wrapper;
