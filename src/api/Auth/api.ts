import axios from "axios";
import { LoginResponse } from "../../types/Auth/types";
import CONFIG from "../../config/config.json";

export const postLogin = async ({ accountId, password }: PostLoginParam) => {
  const { data } = await axios.post<LoginResponse>(
    `${CONFIG.SERVER}/users/login`,
    {
      accountId,
      password,
    }
  );
  return data;
};

export interface PostLoginParam {
  accountId: string;
  password: string;
}
