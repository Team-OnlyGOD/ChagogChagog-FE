import { customAxios } from "../../libs/Axios/customAxios";

export const postChat = async (message: string) => {
  await customAxios.post("/chat", { message });
};
