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

export const ChatContainer = styled.form`
  position: fixed;

  bottom: 280px;
  right: 60px;

  width: 300px;
  height: 400px;

  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.Gray200};
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  padding: 12px 12px 12px 12px;
`;

export const ChatListBox = styled.div`
  width: 100%;
  height: 348px;

  display: flex;
  flex-direction: column;

  row-gap: 16px;
  overflow: auto;
`;

export const ChatInput = styled.input`
  width: 276px;
  height: 40px;

  border-radius: 12px;
  background: ${({ theme }) => theme.Gray100};
  border: none;
  padding-left: 12px;
`;

export const ChatAnswerBox = styled.label`
  padding: 12px 7px 12px 7px;

  border-radius: 12px 12px 12px 0px;
  background: ${({ theme }) => theme.Gray100};
`;

export const AnswerText = styled.div`
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7px 12px 7px 12px;

  border-radius: 12px 12px 12px 0px;
  line-height: 160%; /* 22.4px */

  background: ${({ theme }) => theme.Gray100};
`;

export const QuestionTextBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const QuestionText = styled.div`
  width: fit-content;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7px 12px 7px 12px;

  border-radius: 12px 12px 0px 12px;
  color: #fff;
  background: ${({ theme }) => theme.Primary_blue};
`;
