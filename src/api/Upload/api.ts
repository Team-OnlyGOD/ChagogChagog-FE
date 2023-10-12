import axios from "axios";
import { customAxios } from "../../libs/Axios/customAxios";
import CONFIG from "../../config/config.json";

export const postUpload = async ({ formData }: PostUploadParams) => {
  const { data } = await axios.post<FileResponse>(
    `${CONFIG.SERVER}/files`,
    formData
  );
  return data;
};

export interface PostUploadParams {
  formData: FormData;
}

export interface FileResponse {
  imageUrl: string;
}
