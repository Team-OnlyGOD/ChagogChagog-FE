import * as S from "./style";
import { SmallInputProps } from "./types";

const SmallInput = ({ title, placeholder, ...attr }: SmallInputProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>{title}</S.InputTitle>
      <S.Input {...attr} placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default SmallInput;
