import { NavButtonProps } from "./types";
import * as S from "./style";

const NavButton = ({ isChecked, children }: NavButtonProps) => {
  return <S.NavButtonBox isChecked={isChecked}>{children}</S.NavButtonBox>;
};

export default NavButton;
