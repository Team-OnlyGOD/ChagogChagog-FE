import { useMutation } from "react-query";
import { postChat } from "./api";

export const usePostMessageMutation = () => {
  const mutation = useMutation(postChat);
  return mutation;
};
