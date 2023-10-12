import styled, { css } from "styled-components";

export const NavButtonBox = styled.p<{ isChecked: boolean }>`
  width: max-content;
  padding-left: 16px;
  padding-right: 16px;

  cursor: pointer;

  ${({ isChecked }) =>
    isChecked
      ? css`
          color: ${({ theme }) => theme.Gray900};
          border-bottom: 2px solid ${({ theme }) => theme.Primary_blue};
        `
      : css`
          color: ${({ theme }) => theme.Gray500};
        `}
`;
