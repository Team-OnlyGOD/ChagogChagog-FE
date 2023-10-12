import styled from "styled-components";

export const UploadContainer = styled.div`
  width: 720px;
  height: 600px;

  padding: 36px;

  border-radius: 16px;
  background: #fff;
  z-index: 30;
`;

export const UploadInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 48px;
`;

export const TitleFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;

  column-gap: 36px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 46px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  column-gap: 16px;
`;

export const CancelButton = styled.button`
  width: 60px;
  height: 40px;

  border-radius: 6px;
  background: ${({ theme }) => theme.Gray200};
  border: none;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 60px;
  height: 40px;

  border-radius: 6px;
  background: ${({ theme }) => theme.Primary_blue};
  border: none;
  color: #fff;
  cursor: pointer;
`;
