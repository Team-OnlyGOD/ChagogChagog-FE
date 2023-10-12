import { customAxios } from "../../libs/Axios/customAxios";
import {
  GetInAndOutcomingResponse,
  GetProductDetailResponse,
  GetProductResponse,
} from "../../types/Product/types";

export const getProductABC = async () => {
  const { data } = await customAxios.get<GetProductResponse>(
    "/products/abc_type"
  );
  return data;
};

export const getProductDetail = async (id: string) => {
  const { data } = await customAxios.get<GetProductDetailResponse>(
    `/products/${id}`
  );
  return data;
};

export const getInAndOutcoming = async (id: string) => {
  const { data } = await customAxios.get<GetInAndOutcomingResponse>(
    `/products/incoming_outgoing/?product_id=${id}`
  );
  return data;
};
