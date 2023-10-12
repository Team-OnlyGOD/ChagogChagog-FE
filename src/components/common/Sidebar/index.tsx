import * as S from "./style";
import * as SVG from "../../../assets/svg";
import Text from "../Text/Text";
import { useLocation, useNavigate } from "react-router-dom";
import { SIDEBAR_ITEMS } from "./constant";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <S.Container>
      <S.Wrapper>
        <div onClick={() => navigate("/")} style={{ textAlign: "center" }}>
          <SVG.Logo />
        </div>
        <S.ItemBox>
          {SIDEBAR_ITEMS.map((item) => (
            <S.Item
              onClick={() => navigate(item.path)}
              background={pathname === item.path ? item.background : ""}
              border={pathname == item.path ? item.border : "#fff"}
            >
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
