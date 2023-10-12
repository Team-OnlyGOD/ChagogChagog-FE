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
    </>
  );
};

export default Notice;
