import { useMutation, useQuery } from "react-query";
import {
  createProducts,
  getProducts,
  patchProductByABC,
  patchProductStatus,
} from "./api";

export const useCreateProductsMutation = () => {
  const mutation = useMutation(createProducts);
  return mutation;
};

export const useGetAllProductsQuery = () =>
  useQuery("products/getProducts", () => getProducts());

export const usePatchProductStatusMutation = () => {
  const mutation = useMutation(patchProductStatus);
  return mutation;
};

export const usePatchProdcutByABC = () => {
  const mutation = useMutation(patchProductByABC);
  return mutation;
};
