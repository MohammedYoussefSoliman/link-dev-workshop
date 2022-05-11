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
  label: app-header;
  width: 100%;
  height: 80px;
  margin-bottom: 32px;
  background: ${({ theme }) => theme.colors.primary[200]};
  padding: 1rem;
  p {
    margin: 0;
  }
`;

export default LayoutWrapper;
