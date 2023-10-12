import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.Gray100};
`;

export const LoginInputWrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 24px;

  margin-top: 64px;
`;

export const LoginWrap = styled.form`
  width: 818px;
  height: 100%;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthSubmitButton = styled.button`
  width: 446px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background-color: ${({ theme }) => theme.Primary_blue};
  border: none;
  border-radius: 6px;

  margin-top: 36px;
`;
