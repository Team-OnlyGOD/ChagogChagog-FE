import { useLocation } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../../constant/Token/token.constant";
import { Sidebar } from "../Sidebar";
import * as S from "./style";
import token from "../../../libs/Token/token";
import { usePostMessageMutation } from "../../../api/Chat/mutation";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  AnswerText,
  ChatContainer,
  ChatInput,
  ChatListBox,
  QuestionText,
  QuestionTextBox,
} from "../../Notifiction/style";
import ChatIcon from "../../../assets/Icon/ChatIcon";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  const mutation = usePostMessageMutation();

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<string[]>([]);

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage(value);
  };

  const onSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate(message, {
      onSuccess: ({ chatBot, message }, question) => {
        setMessageList((prev) => [...prev, question]);
        setMessageList((prev) => [...prev, message]);
        setMessage("");
      },
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      {token.getToken(ACCESS_TOKEN_KEY) && <Sidebar />}
      <S.Wrap isSign={pathname === "/login" ? true : false}>{children}</S.Wrap>
      {isOpen && (
        <ChatContainer onSubmit={onSubmitMessage}>
          <ChatListBox>
            <AnswerText>재고관리 기법에 대해서 물어보세요!</AnswerText>
            {messageList.map((data, id) => {
              const idx = id + 1;

              return (
                <>
                  {idx % 2 !== 0 ? (
                    <QuestionTextBox>
                      <QuestionText>{data}</QuestionText>
                    </QuestionTextBox>
                  ) : (
                    <AnswerText>{data}</AnswerText>
                  )}
                </>
              );
            })}
          </ChatListBox>
          <ChatInput
            placeholder="질문을 입력해주세요"
            onChange={onChangeMessage}
            value={message}
          />
        </ChatContainer>
      )}
      <ChatIcon onClick={() => setIsOpen((prev) => !prev)} />
    </S.Container>
  );
};

export default Layout;
