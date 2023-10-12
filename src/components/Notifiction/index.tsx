import React from "react";
import Text from "../common/Text/Text";
import {
  FlexBetween,
  FlexColumn,
  NoticeDataText,
  NoticeItemBox,
  NoticeItemWrap,
  NoticeTopWrap,
} from "./style";
import { NoticeData } from "./constant";
import Img from "../../assets/image/Frame 705.png";
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
