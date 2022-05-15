import styled from "@emotion/styled";

const Wrapper = styled.div`
  label: app-footer;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary[300]};
  .content {
    padding: 25px 32px;
  }
`;

export default Wrapper;
