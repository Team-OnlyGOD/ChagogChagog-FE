import * as S from "./style";
import { TextInputProps } from "./types";

const TextInput = ({
  title,
  placeholder,
  customStyle,
  ...attr
}: TextInputProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>{title}</S.InputTitle>
      <S.Input {...attr} customStyle={customStyle} placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default TextInput;
