import { useMutation } from "react-query";
import { postLogin } from "./api";

export const usePostLoginMutation = () => {
  const mutation = useMutation(postLogin);
  return mutation;
};
