import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostLoginMutation } from "../../api/Auth/mutation";
import token from "../../libs/Token/token";
import { ACCESS_TOKEN_KEY } from "../../constant/Token/token.constant";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const queryClient = useQueryClient();
  const mutation = usePostLoginMutation();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    accountId: "",
    password: "",
  });

  const onChangeLoginData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLoginData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate(loginData, {
      onSuccess: ({ accessToken, expiredAt }) => {
        window.alert("로그인 성공");
        token.setToken(ACCESS_TOKEN_KEY, accessToken);
        navigate("/");
      },
      onError: () => {
        window.alert("로그인 실패");
      },
    });
  };

  return { loginData, onChangeLoginData, onSubmitLoginData };
};

export default useLogin;
