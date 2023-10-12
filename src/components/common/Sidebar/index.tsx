import * as S from "./style";
import * as SVG from "../../../assets/svg";
import Text from "../Text/Text";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrapper>
        <div onClick={() => navigate("/")}>
          <SVG.Logo />
        </div>
        <S.ItemBox>
          <S.Item onClick={() => navigate("/history")}>
            <SVG.BoxIcon />
            <Text fontType="context">재고 현황</Text>
          </S.Item>
          <S.Item onClick={() => navigate("/productlist")}>
            <SVG.HistoryIcon />
            <Text fontType="context">입출고 내역</Text>
          </S.Item>
          <S.Item onClick={() => navigate("/notice")}>
            <SVG.NotificationIcon />
            <Text fontType="context">알림</Text>
          </S.Item>
        </S.ItemBox>
      </S.Wrapper>
      <S.LoginWrapper onClick={() => navigate("/login")}>
        <Text fontType="context">로그인</Text>
      </S.LoginWrapper>
    </S.Container>
  );
};
