import { useMutation, useQuery } from "react-query";
import { createProducts, getProducts, patchProductStatus } from "./api";

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
