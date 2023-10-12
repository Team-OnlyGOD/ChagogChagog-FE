import styled from "styled-components";

export const DetailContainer = styled.div`
  > span {
    display: flex;
    gap: 2px;
    align-items: center;
    margin-bottom: 32px;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
`;

export const DetailImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.Gray200};
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  margin-left: 36px;

  > div {
    display: flex;
    color: ${({ theme }) => theme.Gray500};
    gap: 8px;
  }
`;

export const DetailInfo = styled.div`
  width: 510px;
  height: 100px;
  background-color: ${({ theme }) => theme.Gray50};
  display: flex;
  border-radius: 24px;
  align-items: center;

  div:nth-of-type(4) {
    border: none;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 56px;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.Gray200};
  color: ${({ theme }) => theme.Gray900};
`;
