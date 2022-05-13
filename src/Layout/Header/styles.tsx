import { css } from "@emotion/react";
import styled from "@emotion/styled";
import devices from "theme/devices";

const Wrapper = styled.div`
  position: fixed;
  label: app-header;
  width: 100%;
  height: 125px;
  margin-bottom: 32px;
  background: transparent;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  p {
    margin: 0;
  }
  .header--menu {
    width: 75px;
    height: 100%;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    ${devices.medium} {
      width: 100px;
    }
    ${devices.large} {
      width: 160px;
    }
  }
  .header--actions {
    height: 100%;
    padding: 40px 50px;
    &.settings {
      border-left: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
  .header--aside {
    height: 100%;
    padding: 24px;
    justify-content: flex-end;
    img {
      width: 143px;
    }
  }
`;

export const MenuWrapper = styled.div`
  label: app-menu;
  width: 100vw;
  height: 100vh;
  ${({ theme }) => css`
    background: ${theme.colors.primary[300]};
  `}
`;

export default Wrapper;
