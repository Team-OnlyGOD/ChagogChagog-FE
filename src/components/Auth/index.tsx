import BigLogo from "../../assets/Logo/BigLogo";
import useLogin from "../../hooks/Auth/useLogin";
import TextInput from "../common/TextInput/TextInput";
import * as S from "./style";

const Login = () => {
  const { loginData, onChangeLoginData, onSubmitLoginData } = useLogin();
  return (
    <S.LoginContainer>
      <S.LoginWrap onSubmit={onSubmitLoginData}>
        <BigLogo />
        <S.LoginInputWrap>
          <TextInput
            title="이메일"
            placeholder="이메일을 입력해주세요"
            value={loginData.accountId}
            onChange={onChangeLoginData}
            name="accountId"
          />
          <TextInput
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={loginData.password}
            onChange={onChangeLoginData}
            name="password"
          />
        </S.LoginInputWrap>
        <S.AuthSubmitButton>로그인</S.AuthSubmitButton>
      </S.LoginWrap>
    </S.LoginContainer>
  );
};

export default Login;
