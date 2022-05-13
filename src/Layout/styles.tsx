import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
  label: app-wrapper;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .content {
    flex: 1;
  }
`;

export const HeaderWrapper = styled.div`
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
`;

export default LayoutWrapper;
