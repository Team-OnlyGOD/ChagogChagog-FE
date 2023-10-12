import { NavButtonProps } from "./types";
import * as S from "./style";

const NavButton = ({ isChecked, children, onClick }: NavButtonProps) => {
  return (
    <S.NavButtonBox isChecked={isChecked} onClick={onClick}>
      {children}
    </S.NavButtonBox>
  );
};

export default NavButton;
