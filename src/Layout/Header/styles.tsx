import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "components/Wrappers";
import devices from "theme/devices";

type WrapperType = {
  scrolled?: boolean;
};

const Wrapper = styled("div")<WrapperType>`
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
  ${({ scrolled, theme }) =>
    scrolled &&
    css`
      background: ${theme.colors.primary[300]};
      box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
    `}
`;

export const MenuWrapper = styled(Flex)`
  label: app-menu;
  width: 100vw;
  height: 100vh;
  ${({ theme }) => css`
    background: ${theme.colors.primary[300]};
  `}
  .body {
    margin-top: 125px;
    height: calc(100% - 125px);
    &--aside {
      height: 100%;
    }
    &--content {
      &__list {
        padding: 16px;
        ${devices.medium} {
          padding: 32px;
        }
        ${devices.large} {
          padding: 45px;
        }
        .social {
          margin-top: auto;
        }
      }
      &__footer {
        align-self: flex-end;
        padding: 20px;
        border-top: 1px solid ${({ theme }) => theme.colors.white};
        ${devices.large} {
          padding: 20px 32px;
        }
        ${devices.xxLarge} {
          padding: 20px 90px;
        }
        .copyrights {
          margin-left: auto;
        }
      }
    }
  }
`;

export default Wrapper;
