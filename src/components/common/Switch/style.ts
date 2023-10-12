import styled, { CSSObject, css } from "styled-components";

export const SwitchWrapper = styled.div<{ customStyle?: CSSObject }>`
  width: 144px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 8px;

  border-radius: 16px;
  background: ${({ theme }) => theme.Gray100};

  ${({ customStyle }) => customStyle}
`;

export const SwitchButton = styled.div<{ isClicked?: boolean }>`
  width: 60px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: ${({ theme }) => theme.Primary_blue};
  border-radius: 8px;
  color: #fff;

  ${({ isClicked }) =>
    isClicked
      ? css`
          background-color: ${({ theme }) => theme.Primary_blue};
          color: #fff;
        `
      : css`
          background-color: ${({ theme }) => theme.Gray100};
          color: ${({ theme }) => theme.Gray600};
        `}
`;
