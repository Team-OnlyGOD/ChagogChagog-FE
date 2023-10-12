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

export const ReloadButton = styled.button`
  width: 91px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 4px;

  border-radius: 18px;
  background: ${({ theme }) => theme.Gray100};
  border: none;
`;

export const ReloadText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.Gray600};
`;
