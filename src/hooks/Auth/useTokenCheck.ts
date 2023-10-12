import { ACCESS_TOKEN_KEY } from "../../constant/Token/token.constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import token from "../../libs/Token/token";

const useTokenCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (token.getToken(ACCESS_TOKEN_KEY) === undefined) {
      navigate("/login");
    }
  }, []);
};

export default useTokenCheck;
