import { useMutation } from "react-query";
import { postUpload } from "./api";

export const useUploadMutation = () => {
  const mutation = useMutation(postUpload);
  return mutation;
};
