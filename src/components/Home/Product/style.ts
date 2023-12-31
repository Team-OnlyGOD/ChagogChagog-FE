import styled from "styled-components";

export const TopWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
`;

export const TableContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const MiddleTH = styled.div`
  width: 120px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Gray50};
  border-right: 1px solid ${({ theme }) => theme.Gray300};
  border-bottom: 1px solid ${({ theme }) => theme.Gray300};
`;

export const WhiteMiddleTH = styled.div`
  width: 120px;
  height: 48px;
  display: flex;
  gap: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-right: 1px solid ${({ theme }) => theme.Gray300};
  border-bottom: 1px solid ${({ theme }) => theme.Gray300};
`;

export const CheckBoxTH = styled.div`
  width: 60px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Gray50};
  border-right: 1px solid ${({ theme }) => theme.Gray300};
  border-bottom: 1px solid ${({ theme }) => theme.Gray300};
`;

export const BigBoxTH = styled.div`
  width: 420px;

  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.Gray300};

  background-color: ${({ theme }) => theme.Gray50};
  border-bottom: 1px solid ${({ theme }) => theme.Gray300};
`;

export const WhiteBigBoxTH = styled.div`
  width: 420px;

  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.Gray300};

  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.Gray300};
`;

export const ButtonWrap = styled.div`
  display: flex;

  column-gap: 8px;
`;

export const SmallButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 81px;
  height: 36px;

  border-radius: 8px;
  border: 1px solid #eef0f2;
  background: #fff;

  margin-top: 24px;
`;

export const UnCheckBox = styled.div`
  width: 20px;
  height: 20px;

  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.Gray400};
  cursor: pointer;
`;
