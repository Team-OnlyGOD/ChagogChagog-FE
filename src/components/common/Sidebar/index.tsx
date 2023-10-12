import * as S from "./style";
import * as SVG from "../../../assets/svg";
import Text from "../Text/Text";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_ITEMS } from "./constant";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrapper>
        <div onClick={() => navigate("/")}>
          <SVG.Logo />
        </div>
        <S.ItemBox>
          {SIDEBAR_ITEMS.map((item) => (
            <S.Item onClick={() => navigate(item.path)}>
              <item.icon />
              <Text fontType="context">{item.name}</Text>
            </S.Item>
          ))}
        </S.ItemBox>
      </S.Wrapper>
      <S.LoginWrapper onClick={() => navigate("/login")}>
        <Text fontType="context">로그인</Text>
      </S.LoginWrapper>
    </S.Container>
  );
};
