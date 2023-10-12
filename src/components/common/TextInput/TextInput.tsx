import * as S from "./style";
import { TextInputProps } from "./types";

const TextInput = ({ title, placeholder, ...attr }: TextInputProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>{title}</S.InputTitle>
      <S.Input {...attr} placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default TextInput;
