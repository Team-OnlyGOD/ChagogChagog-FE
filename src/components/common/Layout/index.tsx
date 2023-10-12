import { Sidebar } from "../Sidebar";
import * as S from "./style";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Container>
      <Sidebar />
      <S.Wrap>{children}</S.Wrap>
    </S.Container>
  );
};

export default Layout;
