import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const Wrap = styled.div<{ isSign: boolean }>`
  width: ${({ isSign }) => (isSign ? "100%" : "calc(100% - 220px)")};
  height: 100vh;

  ${({ isSign }) =>
    !isSign &&
    css`
      padding: 64px 60px;
    `}
`;
