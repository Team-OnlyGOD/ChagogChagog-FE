import styled from "styled-components";

export const NoticeItemBox = styled.div`
  width: 535px;
  height: 112px;

  display: flex;
  justify-content: space-between;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.Gray200};
  padding: 20px 24px;
`;

export const NoticeItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 30px;
  margin-top: 36px;
`;

export const NoticeTopWrap = styled.div`
  display: flex;
  align-items: center;
  height: 28px;

  column-gap: 6px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NoticeDataText = styled.span`
  color: ${({ theme }) => theme.Gray600};
  font-size: 14px;
  font-weight: 400;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
