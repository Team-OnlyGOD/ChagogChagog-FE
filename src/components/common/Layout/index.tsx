import { useLocation } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../../constant/Token/token.constant";
import { Sidebar } from "../Sidebar";
import * as S from "./style";
import token from "../../../libs/Token/token";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();
  return (
    <S.Container>
      {token.getToken(ACCESS_TOKEN_KEY) && <Sidebar />}
      <S.Wrap isSign={pathname === "/login" ? true : false}>{children}</S.Wrap>
    </S.Container>
  );
};

export default Layout;
