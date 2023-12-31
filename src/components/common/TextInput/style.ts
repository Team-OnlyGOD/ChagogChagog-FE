import styled, { CSSObject } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 8px;
`;

export const InputTitle = styled.label`
  font-size: 16px;
  font-weight: 500;

  color: ${({ theme }) => theme.Gray700};
`;

export const Input = styled.input<{ customStyle?: CSSObject }>`
  width: 446px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.Gray400};
  border-radius: 6px;

  padding: 10px 16px;
  color: ${({ theme }) => theme.Gray900};

  ${({ customStyle }) => customStyle}

  ::placeholder {
    color: ${({ theme }) => theme.Gray500};
  }
  :focus {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.Primary_blue};
    background: #fff;
  }
`;
