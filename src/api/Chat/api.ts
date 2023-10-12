import { customAxios } from "../../libs/Axios/customAxios";

export const postChat = async (message: string) => {
  const { data } = await customAxios.post<ChatResponse>("/chat", { message });
  return data;
};

export interface ChatResponse {
  message: string;
  chatBot: boolean;
}
