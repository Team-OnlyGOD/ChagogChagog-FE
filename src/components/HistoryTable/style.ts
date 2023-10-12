import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const HistoryTitle = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.Gray50};
  color: ${({ theme }) => theme.Gray600};
  padding: 0 25px;
  border-radius: 12px;

  div {
    display: flex;
    align-items: center;
  }

  div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    width: 500px;

    p:nth-of-type(1) {
      width: 130px;
    }
    p:nth-of-type(2) {
      width: 130px;
    }
    p:nth-of-type(3) {
      width: 130px;
    }
  }
`;

export const HistoryContent = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.Gray900};
  border: 1px solid ${({ theme }) => theme.Gray200};
  padding: 0 25px;
  border-radius: 12px;
  margin-top: 12px;

  div {
    display: flex;
    align-items: center;
  }

  div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    width: 500px;

    p:nth-of-type(1) {
      width: 130px;
    }
    p:nth-of-type(2) {
      width: 130px;
    }
    p:nth-of-type(3) {
      width: 130px;
    }
  }
`;
