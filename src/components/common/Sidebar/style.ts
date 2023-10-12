import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.08);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 48px;
`;

export const LoginWrapper = styled.div`
  width: auto;
  height: 56px;
  margin: auto 0 40px;
  cursor: pointer;
  line-height: 56px;
`;

export const ItemBox = styled.div`
  margin-top: 56px;
  cursor: pointer;
`;

export const Item = styled.div<{ background: string; border: string }>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;

  padding-left: 24px;

  background: ${({ background }) => background};
  border-left: 4px solid ${({ border }) => border};
`;
