import styled from "styled-components";

export const UploadContainer = styled.form`
  width: 720px;
  height: 650px;

  padding: 36px;

  border-radius: 16px;
  background: #fff;
  z-index: 30;
  input[type="file"] {
    display: none;
  }
`;

export const ImageUpload = styled.input``;

export const ImageBox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 151px;
  height: 40px;

  border-radius: 6px;
  border: 1px ${({ theme }) => theme.Gray400};
  background: ${({ theme }) => theme.Primary_blue};
  color: #fff;
`;

export const ImageUploadText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 16px;
  font-weight: 500;

  width: 151px;
  height: 40px;

  background: ${({ theme }) => theme.Primary_blue};
  border-radius: 6px;
`;

export const UploadInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 36px;
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
