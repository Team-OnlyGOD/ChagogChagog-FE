import styled from "styled-components";

export const HomeSwitchContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.Gray300};
`;

export const Flex = styled.div`
  display: flex;

  margin-top: 36px;
`;
