import { customAxios } from "../../libs/Axios/customAxios";
import { GetProductResponse } from "../../types/Product/types";

export const getProductABC = async () => {
  const { data } = await customAxios.get<GetProductResponse>(
    "/products/abc_type"
  );
  return data;
};
