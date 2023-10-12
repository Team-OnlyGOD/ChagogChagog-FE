import Text from "../common/Text/Text";
import {
  AnswerText,
  ChatContainer,
  ChatInput,
  ChatListBox,
  FlexColumn,
  NoticeDataText,
  NoticeItemBox,
  NoticeItemWrap,
  NoticeTopWrap,
  QuestionText,
  QuestionTextBox,
} from "./style";
import { NoticeData } from "./constant";
import Img from "../../assets/image/Frame 705.png";
import ChatIcon from "../../assets/Icon/ChatIcon";
import { ChangeEvent, FormEvent, useState } from "react";
import { usePostMessageMutation } from "../../api/Chat/mutation";

const Notice = () => {
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
    <>
      <Text fontType="H1">알림</Text>
      <NoticeItemWrap>
        {NoticeData.map((item) => (
          <NoticeItemBox>
            <FlexColumn>
              <NoticeTopWrap>
                <item.icon />
                <Text fontType="H4">{item.status}</Text>
              </NoticeTopWrap>
              <NoticeDataText>{item.data}</NoticeDataText>
            </FlexColumn>
            <img src={Img} alt="" />
          </NoticeItemBox>
        ))}
      </NoticeItemWrap>
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
    </>
  );
};

export default Notice;
